import { motion } from "framer-motion";
import { buttonVariants } from "../ui/button";
import { useEffect, useState } from "react";
import { pages } from "@/config/pages";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/utils/utils";
import MenuBtn from "../ui/haburger-menu/menu-btn";

const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
          when: "afterChildren",
          staggerChildren: 0.1,
        },
    }
}

const linksVariants = {
    open: {
        opacity: 1,
        y: 0,
    },
    closed: {
        opacity: 0,
        y: -15
    }
}

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        setOpen(false);
    }, [location.pathname])

  return (
    <motion.div
        className="lg:hidden"
        animate={open ? "open" : "closed"}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
        <MenuBtn
            action={setOpen}
            state={open}
            className="z-[1000]"
        >
        <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            // style={{ translateX: "-50%" }}
            className="uppercase text-center absolute top-12 right-0 w-auto bg-[#0f0f0f] p-4 rounded origin-top z-50 justify-center items-center"
        >
            {pages.map((page) => (
                <motion.li
                    key={page.title}
                    className=""
                    variants={linksVariants}
                >
                    <Link
                        to={page.href}
                        className={cn(buttonVariants({ variant: 'link' }), "font-bold text-lg p-0 text-muted-foreground hover:text-primary")}
                        onClick={() => { setOpen(false); handleScrollToTop() }}
                    >
                        {page.title}
                    </Link>
                </motion.li>
            ))}
        </motion.ul>
        </MenuBtn>
    </motion.div>
  )
}

export default MobileNav