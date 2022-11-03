import { lookup } from "mime-types";

/**
 * Normalizes initial value
 * @param  value - value from the form
 * @param  maxFiles - limit of files
 * @returns  initial value
 */
export const normalizeFilesValue = (
  value: number,
  maxFiles: number
): number | number[] => {
  if (!value) {
    return [];
  }

  if (maxFiles === 1) {
    return [value];
  }

  return value;
};

/**
 * Checks if file is image
 * @param file
 * @returns true if file type is image
 */
export const isImage = (file: File): boolean => {
  const type = lookup(file.name);
  if (!type) return false;
  return type.split("/")[0] === "image";
};

interface ConvertedFile {
  name: string;
  content: string;
}

/**
 * File reader to convert to base64
 * @param file
 * @returns base64 string of file
 */
export const convertFile = (file: File): Promise<ConvertedFile> =>
  new Promise((resolve, reject) => {
    // Set up reader
    const reader = new FileReader();
    // Add onload function
    reader.onload = () => {
      // add resolve with reader.result
      resolve({
        name: file.name,
        content: (reader.result as string)?.split(",").slice(-1)[0],
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export const convertToBase64 = async (
  newFiles: File[]
): Promise<ConvertedFile[]> => {
  const converted = await Promise.all(
    newFiles.map((file) => convertFile(file))
  );
  return converted;
};

export const getName = (name: string): string => {
  // Split the name on '.'
  const parts = name.split(".");
  // Check the final part of the split - if it is `content`, reuturn the other
  // parts joined
  if (parts.slice(-1)[0] === "content") return parts.slice(0, -1).join(".");
  // Else return the name
  return name;
};

export const base64ToFile = async (
  base64: string,
  mimetype: string,
  name: string
): Promise<File> => {
  const url = `data:${mimetype};base64,${base64}`;
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  return new File([buffer], name, { type: mimetype });
};
