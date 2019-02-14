import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import { colors } from '../components/styles/globalStyles'
import Section from '../components/styles/section'
import Title from './title';


const GET_IMAGES = graphql`
  {
    getAllImages: allFile(filter: {
      relativeDirectory: {
        eq: "homeGallery"
      }
    }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`


const Gallery = () => (
  <StaticQuery
    query={GET_IMAGES}
    render={data => {
      const images = data.getAllImages.edges

      return (
        <Section>
          <Title title='featured items' message='a little taste' />

          <GalleryWrapper>
            {images.map(({ node }, i) => (
              <div className={`item item-${i + 1}`} key={i}>
                <Img fluid={node.childImageSharp.fluid} />
                <p className="info">Deliciousss</p>
              </div>
            ))}
          </GalleryWrapper>
        </Section>
      )
    }}
  />
)

export default Gallery


const GalleryWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
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
    background: ${colors.mainYellow};
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
