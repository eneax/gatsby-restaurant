import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import QuickInfo from "../components/HomePageComponents/QuickInfo"

import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/bcg/homeBcg.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title='eatery' subtitle='55 main street - Santa Monica, California'>
        <BannerButton style={{ margin: '2rem auto' }}>
          Menu
        </BannerButton>
      </Banner>
    </HomeHeader>

    <QuickInfo />
  </Layout>
)

export default IndexPage
