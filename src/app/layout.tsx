import Footer from "@/components/elements/footer"
import Header from "@/components/elements/header"
import SiteShell from "@/components/shells/site-shell"
import { Outlet } from "react-router-dom"
import { motion } from "framer-motion"
import FooterBanner from "@/components/elements/footer-banner"

const variants = {
  initial: {
    scaleY: 0
  },
  animate: {
    scaleY: 0
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1]
    },
  }
}

const perspective = {
  initial: {
    scale: 1,
    y: 0,
  },
  animate: {
    scale: 1,
    y: 0,
  },
  exit: {
    scale: 0.9,
    y: -150,
    opacity: 0.5,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

const Layout = () => {
  return (
    <div className="overflow-x-hidden">
        <Header />
        
        <motion.div
          className="absolute top-0 left-0 bottom-0 right-0 bg-background origin-bottom z-[50]"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 2 }}
        />
        <motion.div
          className=""
          variants={perspective}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <SiteShell
            className="mb-24"
          >
            <Outlet />
          </SiteShell>
        </motion.div>

        <Footer />
        <FooterBanner />
    </div>
  )
}

export default Layout
