import { Route, Routes } from "react-router-dom"
import Home from "./app/home/home"
import Layout from "./app/layout"
import About from "./app/about/about"
import Community from "./app/community/community"
import EplusTv from "./app/eplustv/eplustv"
import ShareYourStory from "./app/share-your-story/share-your-story"
import Shop from "./app/shop/shop"
import Testimonials from "./app/testimonials/testimonials"
import NavTest from "./components/ideas/nav"

function App() {
  return (
    <Routes>
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
  )
}

export default App
