import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Title from '../components/title'
import Section from '../components/styles/section'
import { PageHeader } from '../components/styles/headers'
import { QuickInfoWrapper } from '../components/styles/globalStyles'
import aboutImg from '../images/bcg/aboutBcg.jpeg'


const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner title='about' subtitle='a little about us' />
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
        <p className='text'>
          Drumstick alcatra capicola salami flank, short loin prosciutto ball tip sausage pork chop bresaola. Cupim bacon t-bone buffalo corned beef, turkey fatback ham salami flank pork venison. Chicken ribeye picanha, spare ribs shankle filet mignon fatback rump venison ham. Rump andouille spare ribs boudin doner t-bone pork belly sirloin ground round burgdoggen turkey filet mignon frankfurter tenderloin. Drumstick ham hock ribeye fatback tail, biltong capicola tri-tip turkey rump salami cow short ribs burgdoggen.
        </p>
        <p className='text'>
          Jowl biltong alcatra, andouille cow bresaola ham hock turkey sirloin shank chuck prosciutto t-bone. Ball tip sirloin strip steak tongue tri-tip pork belly shankle landjaeger turkey burgdoggen hamburger pig. Turducken ball tip shank, drumstick t-bone meatloaf shoulder leberkas andouille porchetta alcatra prosciutto doner capicola. Strip steak capicola shank ground round. Kevin bresaola sausage tenderloin landjaeger frankfurter beef chuck. Tongue frankfurter capicola strip steak, ground round corned beef porchetta andouille prosciutto shankle filet mignon. Bresaola venison shank, sirloin beef ribs strip steak spare ribs pork chop alcatra landjaeger.
        </p>
      </QuickInfoWrapper>
    </Section>
  </Layout>
)

export default About
