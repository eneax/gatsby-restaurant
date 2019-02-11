import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from '../utils'
import menuImg from '../images/bcg/menuBcg.jpeg'


const Menu = () => (
  <Layout>
    <SEO title="Menu" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={menuImg}>
      Menu
    </PageHeader>
  </Layout>
)

export default Menu
