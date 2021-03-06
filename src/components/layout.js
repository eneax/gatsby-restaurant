import React from "react"
import PropTypes from "prop-types"

import { GlobalStyle } from './styles/globalStyles'
import Navbar from "../components/navbar"
import Footer from "../components/footer"


const Layout =  ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
