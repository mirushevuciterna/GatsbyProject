import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import logo from "../images/logo.png"
import classNames from "classnames"
import "bootstrap/dist/css/bootstrap.min.css"

export const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <div className={styles.headerBg}>
      <div className="container">
        <div className="row">
          <div className={styles.siteNameContainer}>
            <img src={logo} alt="logo" />
            <h1 className={styles.siteName}>Multi Pro</h1>
          </div>
          <div className={styles.mobileMenuIcon}>
            <i className={`${styles.fa} ${styles.faBars}`}></i>
          </div>
          <div className={styles.templatemoNavContainer}>
            <nav className={styles.templatemoNav}>
              <ul
                className={
                  isOpen
                    ? `${styles.navLinks} ${styles.showNav}`
                    : `${styles.navLinks}`
                }
              >
                {links.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.path}>{item.text}</Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
          <div className={styles.navCenter}>
            <div className={styles.navHeader}>
              <button
                type="button"
                className={styles.logoBtn}
                onClick={toggleNav}
              >
                <FaAlignRight className={styles.logoIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
