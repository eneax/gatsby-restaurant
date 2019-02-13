import { createGlobalStyle } from "styled-components"

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

export const textSlanted = `font-family:'Caveat', cursive;`

export const border = ({
  width = '.15rem',
  type = 'solid',
  color = 'white',
}) => {
  return `border:${width} ${type} ${color}`
}
