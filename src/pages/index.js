import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ButtonWrapper = styled.button`
  background: blue;
  color: white;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello, friend!</h3>
    <ButtonWrapper>Click Me</ButtonWrapper>
  </Layout>
)

export default IndexPage
