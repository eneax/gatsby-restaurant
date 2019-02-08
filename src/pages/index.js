import React from "react"
import { FaBeer } from 'react-icons/fa'
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello, friend!</h3>
    <h4> Lets go for a <FaBeer />? </h4>
  </Layout>
)

export default IndexPage
