import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { PageHeader } from '../components/styles/headers'
import aboutImg from '../images/bcg/aboutBcg.jpeg'


const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner title='about us' subtitle='a little about us' />
    </PageHeader>
  </Layout>
)

export default About
