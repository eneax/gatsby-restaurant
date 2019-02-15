import React from 'react'
import styled from 'styled-components'
import { colors, letterSpacing, baskerville } from '../components/styles/globalStyles'

export default function Title({ title, message }) {
  return (
    <TitleWrapper>
      <h3 className='message'>{message}</h3>
      <h1 className='title'>{title}</h1>
      <div className="underline"></div>
    </TitleWrapper>
  )
}


const TitleWrapper = styled.div`
  text-align: center;

  .message {
    ${baskerville};
    ${letterSpacing({ spacing: '.3rem' })};
    font-size: 2rem;
    color: ${colors.mainYellow};
  }

  .title {
    ${letterSpacing({ spacing: '.3rem' })};
    font-size: 2rem;
    text-transform: uppercase;
  }

  .underline {
    width: 5rem;
    height: .2rem;
    background: ${colors.mainYellow};
    margin: .5rem auto;
  }
`

Title.defaultProps = {
  message: 'Our message',
  title: 'Our title',
}
