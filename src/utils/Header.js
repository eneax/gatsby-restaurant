import React from 'react'
import styled from 'styled-components'
import img from '../images/bcg/homeBcg.jpeg'


// children is whatever we pass to HomeHeader in 'pages/index.js'
function HomeHeader({ img, children }) {
  return (
    <IndexHeader img={img}>
      {children}
    </IndexHeader>
  )
}

function PageHeader({ img, children }) {
  return (
    <DefaultHeader img={img}>
      {children}
    </DefaultHeader>
  )
}


const IndexHeader = styled.header`
  min-height: calc(100vh - 54.78px); /* 100vh - height of navbar */
  background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), 
              url(${props => props.img}) center/cover fixed no-repeat;
  
  /* center text inside the header */
  display: flex;
  justify-content: center;
  align-items: center;
`

const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`


// Default props (if img in 'pages/index.js' is not available)
HomeHeader.defaultProps = {
  img: img,
}

PageHeader.defaultProps = {
  img: img,
}

export { HomeHeader, PageHeader }
