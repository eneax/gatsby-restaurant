import React from 'react'
import styled from 'styled-components'
import img from '../../images/bcg/homeBcg.jpeg'


// children is whatever we pass to HomeHeader in 'pages/index.js'
const HomeHeader = ({ img, children }) => (
  <IndexHeader img={img}>
    {children}
  </IndexHeader>
)

const PageHeader = ({ img, children }) => (
  <DefaultHeader img={img}>
    {children}
  </DefaultHeader>
)


const IndexHeader = styled.header`
  min-height: calc(100vh - 50.94px); /* 100vh - height of navbar */
  background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), 
              url(${props => props.img}) center/cover no-repeat;
  
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
