import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { styles, Section } from '../../utils'


const SINGLE_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth:500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "homeGallery/img-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth:500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "homeGallery/img-3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth:500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


export default function Gallery() {
  return (
    <StaticQuery 
      query={SINGLE_IMAGE}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid;
        const img2 = data.img2.childImageSharp.fluid;
        const img3 = data.img3.childImageSharp.fluid;

        return (
          <Section>
            <GalleryWrapper>
              <div className="item item-1">
                <Img fluid={img1} />
                <p className="info">awesome pizza</p>
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
                <p className="info">awesome pork</p>
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
                <p className="info">awesome steak</p>
              </div>
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}


const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;  /* span the column as much as possible --> 1col layout */
  grid-row-gap: 1rem;           /* space between the rows */

  .item {
    position: relative;
  }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: .1rem .3rem;
    text-transform: capitalize;
  }

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;  /* 2 cols of equal width */
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);  /* 1fr 1fr 1fr */
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }

    grid-template-areas: 
    'one one two two'
    'one one three three';
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`
