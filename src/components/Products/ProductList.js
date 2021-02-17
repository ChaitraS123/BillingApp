import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from './ProductItem'


const ProductList = () => {

    const products = useSelector(state => state.products)
    return (
        <div>
            <h3>Total Products-{products.length}</h3>
            {products.map((product) => {
                return <ProductItem key={product._id} id={product._id} name={product.name} price={product.price} />
            })}

        </div>

    )
}
export default ProductList