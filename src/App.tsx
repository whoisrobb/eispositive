import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./app/home/home"
import Layout from "./app/layout"
import About from "./app/about/about"
import Community from "./app/community/community"
import EplusTv from "./app/eplustv/eplustv"
import ShareYourStory from "./app/share-your-story/share-your-story"
import Shop from "./app/shop/shop"
import Testimonials from "./app/testimonials/testimonials"
import NavTest from "./components/ideas/nav"
import { useEffect } from "react"
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis()
    
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, []);
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="community" element={<Community />} />
          <Route path="eplustv" element={<EplusTv />} />
          <Route path="share-your-story" element={<ShareYourStory />} />
          <Route path="shop" element={<Shop />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="nav" element={<NavTest />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
