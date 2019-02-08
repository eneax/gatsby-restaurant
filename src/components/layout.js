import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

// import "./layout.css"


const GLobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color: #262626;
    background: #fff;
  }
`

const Layout =  ({ children }) => {
  return (
    <>
      <GLobalStyle />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
