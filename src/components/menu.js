import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { Section, Title } from '../utils'
import Product from './Product'


const PRODUCTS = graphql`
  {
    items: allContentfulMenu {
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

export default function Menu() {
  return (
    <Section>
      <Title title='featured item' message='little taste' />

      <ProductList>
        <StaticQuery
          query={PRODUCTS}
          render={data => {
            const products = data.items.edges

            return (
              products.map((item) => (
                <Product key={item.node.id} product={item.node}/>
              ))
            );
          }}
        />
      </ProductList>
    </Section>
  )
}


const ProductList = styled.div`
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
