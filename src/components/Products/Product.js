import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import AddProduct from './AddProduct'
import ProductList from './ProductList'

const Product = () => {
    const products = useSelector((state) => state.products)


    return (
        <div>

            <AddProduct />
            <ProductList />


        </div>
    )
}
export default Product

