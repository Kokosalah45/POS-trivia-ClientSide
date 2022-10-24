import { AnimatePresence } from 'framer-motion';
import Overlay from './Overlay';

type Props = {
  isOpen: boolean;
  closeModal?: () => void;
  children: JSX.Element;
};
const Modal = ({ isOpen, closeModal, children }: Props) => {
  return (
    <AnimatePresence>{isOpen && <Overlay>{children}</Overlay>}</AnimatePresence>
  );
};
export default Modal;

/*


  { && (
            <button
              className='fixed z-[999] h-20 w-20 bg-red-700 top-0 right-0'
              onClick={() => {
              
              }}
            >
              try again
            </button>
          )}
*/
