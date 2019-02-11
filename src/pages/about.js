import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from '../utils'
import aboutImg from '../images/bcg/aboutBcg.jpeg'


const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      About
    </PageHeader>
  </Layout>
)

export default About
