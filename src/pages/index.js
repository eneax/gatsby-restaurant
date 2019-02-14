import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import QuickInfo from "../components/quickInfo"
import Gallery from "../components/gallery"

import Banner from "../components/banner"

import { HomeHeader } from '../components/styles/headers'
import { BannerButton } from '../components/styles/buttons'
import img from '../images/bcg/homeBcg.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title='delicious' subtitle='17 main street - San Francisco, California'>
        <Link to='/menu'>
          <BannerButton style={{ margin: '2rem auto' }}>
            Menu
          </BannerButton>
        </Link>
      </Banner>
    </HomeHeader>

    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
