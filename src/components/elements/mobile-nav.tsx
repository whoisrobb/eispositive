import { AnimatePresence, motion } from "framer-motion";
import { buttonVariants } from "../ui/button";
import { useEffect, useState } from "react";
import { pages } from "@/config/pages";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import MenuBtn from "../ui/haburger-menu/menu-btn";

const menuTopVariants = {
    initial: {
        scaleY: 0,
    },
    animate: {
        scaleY: 1,
        transition: {
            delay: 0.1,
            duration: 0.7
        },
        // delay: 2
    },
    exit: {
        scaleY: 0,
        transition: {
            delay: 0.2
        }
    }
}

const menuBottomVariants = {
    initial: {
        scaleY: 0
    },
    animate: {
        scaleY: 1
    },
    exit: {
        scaleY: 0,
        transition: {
            delay: 0.3,
            duration: 0.7
        },
    }
}

const linksVariants = {
    initial: {
        y: '100%',
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.7
        }
    },
    exit: {
        y: '-100%',
        opacity: 0,
    },
}

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation()

    useEffect(() => {
        setOpen(false);
    }, [location.pathname])

  return (
    <div
        className="lg:hidden"
    >
        <MenuBtn
            action={setOpen}
            state={open}
            className="z-[1000]"
        />

        <AnimatePresence>
            {open &&
            <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-screen w-screen bg-background origin-top z-50 flex justify-center items-center"
                variants={menuTopVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="uppercase text-center flex flex-col gap-4">
                    {pages.map((page) => (
                        <motion.div
                            key={page.title}
                            className=""
                            variants={linksVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                        >
                            <Link
                                to={page.href}
                                className={cn(buttonVariants({ variant: 'link' }), "font-bold text-4xl text-muted-foreground hover:text-primary")}
                                onClick={() => setOpen(false)}
                            >
                                {page.title}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <motion.div
                className="fixed top-0 left-0 right-0 h-screen bg-black origin-top"
                variants={menuBottomVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            </>}
        </AnimatePresence>
    </div>
  )
}

export default MobileNav