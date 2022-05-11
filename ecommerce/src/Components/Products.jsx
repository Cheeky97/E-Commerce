import React from 'react'
import styledComponents from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styledComponents.div``

const Products = (item) => {
  return (
    <Container>
        {popularProducts.map(item => (
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products
