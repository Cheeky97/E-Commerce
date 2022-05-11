import React from 'react'
import styledComponents from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styledComponents.div`
    display: flex;
`

const Products = () => {
  return (
    <Container>
        {popularProducts.map(item => (
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products
