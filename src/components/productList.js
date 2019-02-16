import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Section from '../components/styles/section'
import Product from './product'
import Title from './title'
import { QuickInfoWrapper } from '../components/styles/globalStyles'


const PRODUCTS = graphql`
  {
    items: allContentfulMenu(sort: {
      fields: createdAt
    }) {
      edges {
        node {
          name
          price
          ingredients
          img {
            fixed(width: 150, height:150) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }    
  }
`

const ProductList = () => (
  <Section>
    <Title title='ingredients' message='highest quality' />

    <QuickInfoWrapper>
      <p className='text'>
        We take great pride in using only the freshest and highest quality ingredients – from locally and organically farmed produce, to free-range meats, and artisan breads and cheeses.
      </p>
    </QuickInfoWrapper>

    <List>
      <StaticQuery
        query={PRODUCTS}
        render={data => {
          const products = data.items.edges

          return (
            products.map((item) => (
              <Product key={item.node} product={item.node} />
            ))
          );
        }}
      />
    </List>
  </Section>
)

export default ProductList


const List = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;

  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 768px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem; /* gap for columns and rows */
  }
`
