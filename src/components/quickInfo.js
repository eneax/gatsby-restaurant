import React from 'react'
import { Link } from 'gatsby'

import { QuickInfoWrapper } from '../components/styles/globalStyles'
import { SectionButton } from '../components/styles/buttons'
import Title from './title'
import Section from '../components/styles/section'


const QuickInfo = () => (
  <Section>
    <Title message='our promise' title='to you' />

    <QuickInfoWrapper>
      <p className='text'>
        When you walk into our shop, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products made with the highest quality ingredients. If you are not satisfied, please let us know and we will do whatever we can to make things right!
      </p>

      <Link to='/about' style={{ textDecoration: 'none' }}>
        <SectionButton style={{ margin: '2rem auto' }}>
          About
        </SectionButton>
      </Link>
    </QuickInfoWrapper>
  </Section>
)

export default QuickInfo
