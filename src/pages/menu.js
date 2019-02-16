import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import ProductList from "../components/productList"
import { PageHeader } from '../components/styles/headers'
import { bgImg } from '../components/styles/globalStyles'


export const query = graphql`
  query menuBgPic {
    bgPic: file(relativePath: { regex: "/menuBcg.jpeg/" }) {
      childImageSharp {
        fluid(
          maxWidth: 1240,
          duotone: { 
            highlight: "#000000", 
            shadow: "#000000", 
            opacity: 45 }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


const Menu = ({ data }) => (
  <Layout>
    <SEO title="Menu" keywords={[`gatsby`, `application`, `react`]} />

    <PageHeader>
      <Banner title='menu' subtitle={`let's dig in`} />
      <Img
        fluid={data.bgPic.childImageSharp.fluid}
        alt="Picture of a hamburger and a beer"
        style={bgImg}
      />
    </PageHeader>

    <ProductList />
  </Layout>
)

export default Menu
