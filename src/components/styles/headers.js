import React from 'react'
import styled from 'styled-components'


const HomeHeader = ({ children }) => (
  <IndexHeader>
    {children}
  </IndexHeader>
)

const PageHeader = ({ children }) => (
  <DefaultHeader>
    {children}
  </DefaultHeader>
)


const IndexHeader = styled.header`
  min-height: calc(100vh - 50.94px); /* 100vh - height of navbar */
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`

export { HomeHeader, PageHeader }
