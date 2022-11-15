import {
  type MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  type DropzoneInputProps,
  type DropzoneRootProps,
  useDropzone,
} from "react-dropzone";
import { useFormContext, useWatch } from "react-hook-form";
import imageCompression from "browser-image-compression";
import {
  type Service,
  services,
  useSubmit,
} from "@kanda-libs/ks-frontend-services";
import {
  base64ToFile,
  convertFile,
  convertToBase64,
  getName,
  isImage,
  normalizeFilesValue,
} from "./helpers";
import { FileCardFile } from "~/field/components/FileInput/FileCard/types";
import { StringIndexedObject } from "~/types";
import { OPTIONS } from "./constants";
import type { FileInputPropsHookArgs } from "./types";

export interface FileInputPropsHook {
  files: FileCardFile[];
  showFileZone: boolean;
  isDragActive: boolean;
  getRootProps: <T extends DropzoneRootProps>(props?: T) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
  makeRemoveFile: (index: number) => (e: MouseEvent) => void;
  onCrop: (file: File) => void;
  onCancelCrop: () => void;
  cropFile?: File;
  fileError?: string;
  compressing: boolean;
}

export default function useFileInputProps({
  name: inputName,
  accept,
  maxFiles = 0,
  maxSize,
  resolveFile,
  defaultValue,
  onAddFiles,
  onUpdateFiles,
  onRemoveFile,
  cropImage,
  asBase64,
  inputFile,
  compressImages,
}: FileInputPropsHookArgs): FileInputPropsHook {
  const name = getName(inputName as string);

  const { setValue, register } = useFormContext();

  const [cropFile, setCropFile] = useState();
  const [fileError, setFileError] = useState<string>();
  const [compressing, setCompressing] = useState(false);

  const value = useWatch({ name, defaultValue });

  const { submit: compress } = useSubmit(
    // TODO: Remove need to cast
    services.pdf.compress as unknown as Service<any, any, any>
  );

  const files = useMemo(() => {
    const newFiles = normalizeFilesValue(value, maxFiles);

    onUpdateFiles?.(newFiles);

    return newFiles;
  }, [value, maxFiles, onUpdateFiles]);

  console.log("hell2o");

  /**
   * @param {Array.File} newFiles
   */
  const setFiles = useCallback(
    async (newFiles) => {
      if (asBase64) {
        const base64Files = await convertToBase64(newFiles);
        setValue(name, maxFiles === 1 ? base64Files[0] : base64Files);
        return;
      }
      setValue(name, maxFiles === 1 ? newFiles[0] : newFiles);
    },
    [maxFiles, name, setValue, asBase64]
  );

  const showFileZone = maxFiles === 0 || files.length < maxFiles;

  const [resolvedFiles, setResolvedFiles] = useState<File[]>([]);

  /**
   * When files change it calles resolve file callback
   * to get more information about file from default value
   */
  useEffect(() => {
    if (files.length === 0) setResolvedFiles([]);
    setResolvedFiles(
      files.map((value) => {
        const file = value as unknown as FileCardFile;

        if (asBase64)
          return {
            name: file?.name || "Unknown File",
            preview:
              isImage(file) && `data:${file.type};base64,${file.content}`,
          } as unknown as File;
        if (!(file instanceof File)) {
          const resolvedField = resolveFile ? resolveFile(file) : {};

          return {
            name: resolvedField.name || "Unknown File",
            preview: resolvedField.preview,
          } as unknown as File;
        }
        return {
          name: file.name,
          preview: isImage(file) && URL.createObjectURL(file),
          fileObject: file,
        } as unknown as File;
      })
    );
  }, [files, resolveFile, asBase64]);

  /**
   * Handles on drop logic updates files state
   * @param {Array} droppedFiles - new uploaded files
   */
  const onDrop = useCallback(
    async (droppedFiles) => {
      setFileError(undefined);

      const newFiles = [...files, ...droppedFiles];

      const finalFiles = maxFiles === 0 ? newFiles : newFiles.slice(-maxFiles);

      const newAddedFiles = finalFiles.filter((file) => !files.includes(file));

      if (!cropImage && onAddFiles) {
        onAddFiles(newAddedFiles);
      }

      if (cropImage) {
        setCropFile(newAddedFiles[0]);
      }

      setCompressing(true);
      const compressedFiles = await Promise.all(
        finalFiles.map(async (file) => {
          if (!compressImages) return file;
          // if (!['image', 'pdf'].some((type) => file?.type?.includes(type)))
          //   return file;
          if (file?.type?.includes("image")) {
            const compressed = await imageCompression(file, {
              ...OPTIONS,
              onProgress: (p) => {
                console.log(`Processing percentage: ${p}%`);
              },
            });
            return compressed;
          }
          const { name: fileName, type } = file;
          const { content } = await convertFile(file);
          if (!content) return null;
          const { data: pdf, error } = await compress({
            body: {
              content,
              mimetype: type || null,
            },
          });
          if (error || !pdf?.content) {
            setFileError("Error compressing file");
            return null;
          }
          const pdfFile = await base64ToFile(
            pdf.content,
            pdf.mimetype,
            fileName || "compressed.pdf"
          );
          if (pdf?.content?.length > 980 * 1024) {
            setFileError("Error: compressed file is still too large to submit");
            return null;
          }
          return pdfFile;
        })
      );
      setCompressing(false);
      setFiles(compressedFiles.filter((file) => file));
    },
    [files, maxFiles, cropImage, onAddFiles, setFiles, compressImages, compress]
  );

  /**
   * Handles on crop logic
   * @param {Array} croppedFile - new cropped file
   */
  const onCrop = useCallback(
    (newCroppedFile: File) => {
      // replace original file with cropped one
      const newFiles = files.map((file) =>
        file === cropFile ? newCroppedFile : file
      );

      setCropFile(undefined);
      setFiles(newFiles);

      if (onAddFiles) {
        onAddFiles([newCroppedFile]);
      }
    },
    [files, setFiles, onAddFiles, cropFile]
  );

  /**
   * Handles cancel crop logic
   */
  const onCancelCrop = useCallback(() => {
    setCropFile(undefined);
  }, []);

  /**
   * Make function to create a closure to handle remove file logic
   * @param {number} index - new uploaded files
   * @returns function to handle remove file logic
   */
  const makeRemoveFile = (index: number) => (e: MouseEvent) => {
    e.stopPropagation();
    if (onRemoveFile) {
      onRemoveFile(files[index]);
    }
    const newFiles = files.filter((_, i) => i !== index);

    setFiles(newFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    multiple: maxFiles !== 1,
    noDragEventsBubbling: true,
    // ...(maxSize && { maxSize }),
    onDropRejected: (err) => {
      if (err[0]?.errors[0]?.code === "file-too-large") {
        setFileError(
          `File size too large. File must be below ${
            (maxSize as number) / 1024 / 1024
          }mb`
        );
      }
      if (err[0]?.errors[0]?.code === "file-invalid-type") {
        setFileError(`File type is not allowed`);
      }
    },
  });

  const { ref } = getInputProps() as StringIndexedObject;

  useEffect(() => {
    // // If input ref is empty or no input file, return
    // if (!ref.current || !inputFile) return;
    console.log({
      inputFile,
      ref,
    });
    // // Extract input element
    // const input = ref.current;
    // // Create file list
    // const dt = new DataTransfer();
    // dt.items.add(inputFile);
    // // Add file list to input
    // input.files = dt.files;
    // // Dispatch event
    // input.dispatchEvent(new Event("change", { bubbles: true }));
  }, [inputFile, ref]);

  /**
   * Register and unregister field on react hook form
   * this should run on component did mount and unmount
   */
  useEffect(() => {
    register(name);
  }, [register, name]);

  return {
    files: resolvedFiles,
    showFileZone,
    isDragActive,
    getInputProps,
    getRootProps,
    makeRemoveFile,
    onCrop,
    onCancelCrop,
    cropFile,
    fileError,
    compressing,
  };
}
