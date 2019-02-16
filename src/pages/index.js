import React from "react"
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import QuickInfo from "../components/quickInfo"
import Gallery from "../components/gallery"
import Banner from "../components/banner"
import { HomeHeader } from '../components/styles/headers'
import { BannerButton } from '../components/styles/buttons'
import { bgImg } from '../components/styles/globalStyles'


export const query = graphql`
  query homeBgPic {
    bgPic: file(relativePath: { regex: "/homeBcg.jpeg/" }) {
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


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <HomeHeader>
      <Banner title='delicious' subtitle='17 main street - San Francisco, California'>
        <Link to='/menu'>
          <BannerButton style={{ margin: '2rem auto' }}>
            Menu
          </BannerButton>
        </Link>
      </Banner>

      <Img
        fluid={data.bgPic.childImageSharp.fluid}
        alt="Inside picture of a pub"
        style={bgImg}
      />
    </HomeHeader>

    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
