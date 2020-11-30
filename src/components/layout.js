import React from "react"

import { Header } from './header'
import { NavBar } from './navBar'
import { Footer } from './footer'


export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <NavBar />
      { children }
      <Footer />
    </>
  )
}