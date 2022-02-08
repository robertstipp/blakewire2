import React, { useContext } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { GatsbyContext } from "../context/context"

const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)
  return (
    <>
      <Navbar />
      {isSidebarOpen && <Sidebar />}

      {children}
      <Footer />
    </>
  )
}

export default Layout
