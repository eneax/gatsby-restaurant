import React from "react"
import PropTypes from "prop-types"

import GlobalStyle from './styles/GlobalStyle'
import Navbar from "../components/globals/navbar"
import Footer from "../components/globals/Footer"


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
