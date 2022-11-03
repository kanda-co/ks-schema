import { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext, useWatch } from "react-hook-form";
import imageCompression from "browser-image-compression";
import { useMutate, PDFCompressionService } from "@kanda-api/library";

import {
  isImage,
  normalizeFilesValue,
  convertToBase64,
  convertFile,
  getName,
  base64ToFile,
} from "./helpers";
import { OPTIONS } from "./constants";

import type { FileInputProps } from "./types";

export interface FileInputPropsHook {}

export default function useFileInputProps({
  name: inputName,
  register,
  accept,
  children,
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
}: FileInputProps): FileInputPropsHook {}
