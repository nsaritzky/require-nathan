import { ReactNode } from "react"
import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
)

export default Layout
