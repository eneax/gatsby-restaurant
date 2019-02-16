import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FaPhone } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Title from '../components/title'
import Form from '../components/form'
import Section from '../components/styles/section'
import { PageHeader } from '../components/styles/headers'
import { BannerButton } from '../components/styles/buttons'


export const query = graphql`
  query contactBgPic {
    bgPic: file(relativePath: { regex: "/contactBcg.jpeg/" }) {
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

const Contact = ({ data }) => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} /> 

    <PageHeader>
      <Banner title='contact' subtitle={`let's get in touch`}>
        <a href="tel:+18506484200">
          <BannerButton style={{ margin: '2rem auto' }}>
            <FaPhone /> 850-648-4200
          </BannerButton>
        </a>
      </Banner>

      <Img
        fluid={data.bgPic.childImageSharp.fluid}
        alt="Three vintage phones"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </PageHeader>

    <Section>
      <Title title='11AM-2AM' message='open everyday' />

      <Form />
    </Section>

  </Layout>
)

export default Contact
