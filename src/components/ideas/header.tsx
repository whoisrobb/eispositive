import { pages } from "@/config/pages";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../elements/logo";
import { cn } from "@/utils/utils";
import { useLocation } from 'react-router-dom';
import SiteShell from "../shells/site-shell";
import MobileNav from "../elements/mobile-nav";
import { useRef, useState } from "react";

const Header = () => {
    const [hidden, setHidden] = useState(false);
    const lastYRef = useRef(0);

    const { pathname } = useLocation();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const difference = latest - lastYRef.current;
        // const previous = scrollY.getPrevious(); 
        if (Math.abs(difference) > 50) {
            setHidden(difference > 0);

            lastYRef.current = latest;
        }
    })

  return (
    <motion.header
        className="border-b fixed left-0 right-0 h-24 bg-background"
        variants={{
            visible: { y: 0 },
            hidden: { y: '-100%' }
        }}
        animate={hidden ? 'hidden': 'visible'}
        transition={{ duration: 0.2 }}
    >
        <SiteShell
            className="flex items-center justify-between gap-12 h-full"
        >
            
        <Logo className="w-40" />

        <div className="lg:flex items-center hidden">
            {pages.map((link, index) => (
                <div
                    key={index}
                    className="relative py-2 px-4"
                >
                    <Link
                        to={link.href}
                        className={cn("uppercase z-10",
                            pathname === link.href ?
                            "" :
                            "text-muted-foreground"
                        )}
                    >
                        {link.title}
                    </Link>
                    {link.href === pathname &&
                    <motion.div
                        className="absolute top-0 bottom-0 left-0 right-0 rounded -z-10 bg-muted"
                        layoutId="background"
                    />}
                </div>
            ))}
        </div>
        <MobileNav />

        </SiteShell>
    </motion.header>
  )
}

export default Header