import { useEffect, useState, useContext } from "react";
import { ModalsWrapperContext } from "@kanda-libs/ks-design-library";

export type ImageType = string | ArrayBuffer | null;

export interface ImageHook {
  image?: ImageType;
  modalId: string;
}

export default function useImage(name: string, file: File): ImageHook {
  const [image, setImage] = useState<ImageType | undefined>();

  const { showModal, hideModal } = useContext(ModalsWrapperContext);

  const modalId = `${name}-cropper`;

  /**
   * Converts file on url when it changes and removes url if there is no file
   */
  useEffect(() => {
    if (!file) {
      setImage(undefined);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }, [file]);

  /**
   * Hides and shows cropper modal
   */
  useEffect(() => {
    if (!image) {
      hideModal(modalId);
      return;
    }

    showModal(modalId);
  }, [image, hideModal, showModal, modalId]);

  return { image, modalId };
}
