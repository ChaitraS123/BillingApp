import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addproduct } from '../actions/productaction'

const AddProduct = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const handlenameChange = (e) => {
        setName(e.target.value)
    }
    const handlepriceChange = (e) => {
        setPrice(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = { name: name, price: price }
        dispatch(addproduct(formdata))


    }
    return (
        <div>
            <h2>Add product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter name" value={name} onChange={handlenameChange} />
                <input type="text" placeholder="enter price" value={price} onChange={handlepriceChange} />
                <input type="submit" value="add product" />
            </form>

        </div>
    )
}
export default AddProduct