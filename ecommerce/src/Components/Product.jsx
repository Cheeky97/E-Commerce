import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styledComponents from 'styled-components'


const Container = styledComponents.div`
    flex: 1;
    margin: 5px;
`
const Circle = styledComponents.div``
const Image = styledComponents.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styledComponents.div``
const Icon = styledComponents.div``

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
