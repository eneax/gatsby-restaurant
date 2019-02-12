import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { styles, Section } from '../../utils'


export default function Gallery() {
  return (
    <StaticQuery 
      query={graphql`
        {
          img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
            childImageSharp {
              fluid(maxWidth:500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.img1.childImageSharp.fluid} />}
    />
  )
}
