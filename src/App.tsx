import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./app/home/home"
import Layout from "./app/layout"
import About from "./app/about/about"
import Community from "./app/community/community"
import EplusTv from "./app/eplustv/eplustv"
import Testimonials from "./app/testimonials/testimonials"
import { useEffect, useState } from "react"
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { AnimatePresence } from "framer-motion"
import Preloader from "./app/preloader"
import EplustvBlog from "./app/home/_components/eplustv-blog"
import Page from "./app/home/blog-page/page"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis()
    
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default'
    }, 3500)
  }, []);
  return (
    <AnimatePresence mode="wait">
      {isLoading ?
      <Preloader />
      :
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="community" element={<Community />} />
          <Route path="eplustv" element={<EplusTv />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="blog/:index" element={<Page />} />
        </Route>
      </Routes>}
    </AnimatePresence>
  )
}

export default App
