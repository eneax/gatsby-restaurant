import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import QuickInfo from "../components/quickInfo"
import Gallery from "../components/gallery"
import Menu from "../components/menu"
import Banner from "../components/banner"

import { HomeHeader } from '../components/styles/headers'
import { BannerButton } from '../components/styles/buttons'
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
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage
