import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader } from '../components/styles/headers'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <HomeHeader>
      <h1>
        NOT FOUND 
        <span role='img' aria-label='disappointed emoji'> 😥</span>
      </h1> 
    </HomeHeader>
  </Layout>
)

export default NotFoundPage
