import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import Logo from './logo';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';
import { ContactForm } from './contact-form';

const Header = () => {
    const [hidden, setHidden] = useState(false);
    const lastYRef = useRef(0);

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
        className="fixed lg:left-12 md:left-6 left-3 lg:right-12 md:right-6 right-3 h-24 z-[100]  flex justify-between items-center"
        variants={{
            visible: { y: 0 },
            hidden: { y: '-100%' }
        }}
        animate={hidden ? 'hidden': 'visible'}
        transition={{ duration: 0.2 }}
    >
        <Logo className='w-40' />

        <DesktopNav />
        <MobileNav />

        <div className="flex items-center gap-4">
            <ContactForm />
        </div>
    </motion.header>
  )
}

export default Header