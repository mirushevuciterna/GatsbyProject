import React from "react"
import Navbar from "./Navbar"
import "./layout.css"

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
