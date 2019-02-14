import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import ProductList from "../components/productList"
import { PageHeader } from '../components/styles/headers'
import menuImg from '../images/bcg/menuBcg.jpeg'


const Menu = () => (
  <Layout>
    <SEO title="Menu" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={menuImg}>
      <Banner title='menu' subtitle={`let's dig in`} />
    </PageHeader>

    <ProductList />
  </Layout>
)

export default Menu
