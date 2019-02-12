import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { styles } from '../../utils'


export default function Product({ product }) {
  const { name, price, ingredients } = product;
  const { fixed } = product.img;

  return (
    <ProductWrapper>
      <Img fixed={fixed} className='img' />
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p className="info">{ingredients}</p>
      </div>
    </ProductWrapper>
  )
}


const ProductWrapper = styled.div`
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;  /* img is auto and the content is 1fr */
    grid-column-gap: 1rem;
  }

  .img {
    border-radius: .5rem;
  }

  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  .name {
    color: ${styles.colors.mainYellow};
    margin-top: .5rem;
  }

  .price {
    color: ${styles.colors.mainYellow};
    margin-top: .5rem;
  }

  .info {
    margin-top: .5rem;
    word-spacing: .2rem;
    text-transform: lowercase;
  }
`