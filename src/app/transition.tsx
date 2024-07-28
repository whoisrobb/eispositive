import { ReactNode } from "react";
import { motion } from "framer-motion";

// type TransitionProps = {
//     Component: JSXElementConstructor<ReactNode>;
// };

// const Transition = ({ Component }: TransitionProps) => {
const Transition = (Component: () => ReactNode) => {
  return (
    <>
        <Component />
        <motion.div
            className="fixed top-0 left-0 w-[100%] h-screen bg-[#0f0f0f] origin-bottom"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
            className="fixed top-0 left-0 w-[100%] h-screen bg-[#0f0f0f] origin-top"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
    </>
  )
}

export default Transition