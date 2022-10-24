import { motion } from 'framer-motion';
type Props = {
  children: JSX.Element;
};
const Overlay = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ scale: 0 }}
      className={`inset-0 fixed grid place-items-center  z-[900] bg-[rgba(0,0,0,0.5)] `}
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
