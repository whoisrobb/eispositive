import Header from "@/components/elements/header"
import SiteShell from "@/components/shells/site-shell"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <Header />

        <SiteShell
          className="pt-24"
        >
          <Outlet />
        </SiteShell>
    </div>
  )
}

export default Layout
