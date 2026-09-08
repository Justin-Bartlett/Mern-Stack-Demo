import { useState } from "react"
import { Link } from "react-router-dom"

import NavLinks from "./NavLinks"
import MainHeader from "./MainHeader"
import SideDrawer from "./SideDrawer"
import "./MainNavigation.css"
import Backdrop from "../UIElements/Backdrop"

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const openDrawerHandler = () => {
    setDrawerIsOpen(true)
  }

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false)
  }

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer onClick={closeDrawerHandler} show={drawerIsOpen}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          onClick={openDrawerHandler}
          className="main-navigation__menu-btn"
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  )
}

export default MainNavigation
