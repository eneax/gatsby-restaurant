import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Title from '../components/title'
import Form from '../components/form'
import Section from '../components/styles/section'
import { PageHeader } from '../components/styles/headers'
import { BannerButton } from '../components/styles/buttons'
import contactImg from '../images/bcg/contactBcg.jpeg'

import { FaPhone } from 'react-icons/fa'

const Contact = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
      <Banner title='contact us' subtitle={`let's get in touch`}>
        <a href="tel:+18506484200">
          <BannerButton style={{ margin: '2rem auto' }}>
            <FaPhone /> 850-648-4200
          </BannerButton>
        </a>
      </Banner>
    </PageHeader>

    <Section>
      <Title title='11AM-2AM' message='open everyday' />

      <Form />
    </Section>

  </Layout>
)

export default Contact
