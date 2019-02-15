import { createGlobalStyle } from "styled-components"
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color: #262626;
    background: #fff;
  }
`

export const colors = {
  mainWhite: `#fff`,
  mainBlack: `#262626`,
  mainYellow: `#FFBB00`,
  secYellow: `#ffc933`,
  mainGrey: `#474747`,
}

export const transDefault = 'transition: all .3s ease-in-out';

export const transObject = ({
  property = 'all',
  time = '.3s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const letterSpacing = ({ spacing = '.1rem' }) => {
  return `letter-spacing:${spacing}`
}

export const baskerville = `font-family: baskerville,serif;`

export const border = ({
  width = '.15rem',
  type = 'solid',
  color = 'white',
}) => {
  return `border:${width} ${type} ${color}`
}


export const QuickInfoWrapper = styled.div`
  width: 90%; /* 90% of 90vw */
  margin: 2rem auto;

  .text {
    line-height: 2rem;
    color: ${colors.mainGrey};
    word-spacing: .2rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
