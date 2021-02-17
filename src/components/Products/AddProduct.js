import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addproduct } from '../../actions/productaction'

const AddProduct = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [formError, setFormError] = useState({})
    const errors = {}
    const handlenameChange = (e) => {
        setName(e.target.value)
    }
    const handlepriceChange = (e) => {
        setPrice(e.target.value)
    }
    const runValidation = () => {
        if (name.length === 0) {
            errors.name = "name is required"
        }
        if (price.length === 0) {
            errors.price = "price is required"
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        runValidation()
        if (Object.keys(errors).length == 0) {
            setFormError({})
            const formdata = { name: name, price: price }
            dispatch(addproduct(formdata))
            setName('')
            setPrice('')
        }
        else {
            setFormError(errors)
            setName('')
            setPrice('')
        }
    }
    return (
        <div className="card">
            <div className="card-body">
                <h3>Add Product</h3>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="enter name" value={name} onChange={handlenameChange} />
                            {formError.name && <span style={{ color: 'red', fontSize: '12px' }}>{formError.name}</span>}
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="enter price" value={price} onChange={handlepriceChange} />
                            {formError.price && <span style={{ color: 'red', fontSize: '12px' }}>{formError.price}</span>}
                        </div>
                        <div className="col-md-3">
                            <input type="submit" className="btn btn-primary" value="add product" />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default AddProduct