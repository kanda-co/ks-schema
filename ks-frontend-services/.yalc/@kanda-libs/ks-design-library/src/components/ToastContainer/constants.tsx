import { Slide } from 'react-toastify';
import CloseButton from '~/hooks/useToast/CloseButton';

export const INITIAL_STATE = {
  position: 'bottom-center',
  autoClose: 5000,
  hideProgressBar: false,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: false,
  newestOnTop: true,
  draggable: false,
  closeButton: CloseButton,
  transition: Slide,
  theme: 'colored',
  icon: false,
};
