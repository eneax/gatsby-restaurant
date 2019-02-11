import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { styles } from '../../utils'
import { Section, Title, SectionButton } from '../../utils'

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message='let us tell you' title='our mission' />

        <QuickInfoWrapper>
          <p className='text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt sit aspernatur suscipit, nulla enim molestias facere dolores adipisci quaerat omnis ea sequi hic deserunt esse. Laboriosam delectus alias aperiam quae!
          </p>

          <Link to='/about' style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>
              About
            </SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%; /* 90% of 90vw */
  margin: 2rem auto;

  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: .2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`