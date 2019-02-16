import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Title from '../components/title'
import Section from '../components/styles/section'
import { PageHeader } from '../components/styles/headers'
import { QuickInfoWrapper } from '../components/styles/globalStyles'


export const query = graphql`
  query aboutBgPic {
    bgPic: file(relativePath: { regex: "/aboutBcg.jpeg/" }) {
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


const About = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />

    <PageHeader>
      <Banner title='about' subtitle='a little about us' />

      <Img
        fluid={data.bgPic.childImageSharp.fluid}
        alt="Two lamps and a neon inside a pub"
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
      <Title title='ipsum' message='Bacon' />

      <QuickInfoWrapper>
        <p className='text'>
          Bacon ipsum dolor amet alcatra tenderloin chuck cow strip steak hamburger drumstick ham hock ribeye capicola shoulder pancetta shankle. Ball tip pancetta andouille sirloin. Fatback frankfurter cupim pork belly. Tenderloin pancetta chicken kevin pork, meatloaf landjaeger cow porchetta. Cow tail pork loin shank beef ribs prosciutto swine, tenderloin drumstick chicken short loin short ribs pig alcatra tri-tip.
        </p>
        <p className='text'>
          Short loin beef ribs burgdoggen picanha brisket. Hamburger pig capicola rump. Pork chop ball tip shankle biltong shank. Ham hock kielbasa short ribs alcatra pork loin porchetta hamburger cow landjaeger ribeye flank filet mignon shankle buffalo. Sirloin biltong tenderloin t-bone, turkey bresaola chicken venison short loin tongue shoulder picanha ball tip pig. Pastrami shankle meatloaf tri-tip sirloin hamburger short ribs flank ball tip pancetta pork loin prosciutto burgdoggen cow. Strip steak flank salami, leberkas kielbasa turducken fatback beef turkey.
        </p>
        <p className='text'>
          Pork chop short ribs alcatra, pork burgdoggen hamburger strip steak kevin fatback jerky tri-tip boudin meatball cow. Kevin ball tip venison short loin bacon buffalo hamburger leberkas ham hock corned beef t-bone spare ribs. Ground round ribeye sirloin strip steak frankfurter, meatball bresaola shoulder buffalo turkey. Capicola bresaola brisket, prosciutto cupim shoulder t-bone shank frankfurter strip steak kielbasa chicken kevin rump. Leberkas beef ribs pork short ribs flank chuck salami short loin. Biltong pastrami burgdoggen jerky turducken pancetta chicken frankfurter.
        </p>
      </QuickInfoWrapper>
    </Section>
  </Layout>
)

export default About
