import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from '../utils'
import contactImg from '../images/bcg/contactBcg.jpeg'


const Contact = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
      Contact
    </PageHeader>
  </Layout>
)

export default Contact