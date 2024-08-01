import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { pages } from "@/config/pages";
import { Link } from "react-router-dom";
import MenuBtn from "../ui/haburger-menu/menu-btn";
import { useOnClickOutside } from "usehooks-ts";

const menuOpenVariants = {
    initial: {
        scaleX: 0,
    },
    animate: {
        scaleX: 1,
    },
    exit: {
        scaleX: 0,
        transition: {
            delay: 0.3
        }
    }
};

const linkItemsVariants = {
    initial: {
        y: '100%',
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.3
        }
    },
    exit: {
        y: '-100%',
        opacity: 0,
    },
};

const DesktopNav = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null)
  
    const handleClickOutside = () => {
        setOpen(false);
    }
  
    useOnClickOutside(menuRef, handleClickOutside)

  return (
    <div className="hidden lg:block mt-6">
        <MenuBtn
            className="relative" action={setOpen} state={open}
        />

        <AnimatePresence>
            {open &&
            <motion.div
            // className="rounded-full bg-[#0f0f0f] flex items-center justify-center gap-4 py-4 px-8 absolute top-12 left-80 right-80"
                className="rounded-full bg-[#0f0f0f] text-[#fcfcfc] flex items-center justify-center gap-4 py-4 px-8 absolute top-16 left-[30%] w-auto"
                variants={menuOpenVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2 }}
                ref={menuRef}
            >
                {pages.map((page) => (
                    <motion.div
                        key={page.title}
                        variants={linkItemsVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            to={page.href}
                            className="font-anton capitalize"
                            onClick={() => setOpen(false)}
                        >
                            {page.title}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>}
        </AnimatePresence>
    </div>
  )
}

export default DesktopNav