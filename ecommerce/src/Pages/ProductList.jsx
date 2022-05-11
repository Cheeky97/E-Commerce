import React from 'react'
import styledComponents from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'


const Container = styledComponents.div``
const Title = styledComponents.h1`
    margin: 20px;
`
const FilterContainer = styledComponents.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styledComponents.div`
    margin: 20px;
`
const FilterText = styledComponents.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styledComponents.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styledComponents.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                    Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                    Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (lowest)</Option>
                    <Option>Price (highest)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
