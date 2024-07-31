import Footer from "@/components/elements/footer"
import Header from "@/components/elements/header"
// import MobileNav from "@/components/elements/mobile-nav"
import SiteShell from "@/components/shells/site-shell"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="">
        <Header />
        
        <SiteShell
          className="mb-24"
        >
          <Outlet />
        </SiteShell>

        <Footer />
    </div>
  )
}

export default Layout
