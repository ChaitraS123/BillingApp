import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addBill } from '../../actions/billaction'
import { allbills } from '../../actions/billaction'
import Currentbill from './Currentbill';



const AddBill = () => {
    const [date, setDate] = useState('')
    const [toggle, setToggle] = useState(false)

    const [customerid, setcustomerid] = useState('')
    const [productid, setProductid] = useState('')
    const [quantity, setQuantity] = useState('')
    const [formError, setFormError] = useState({})
    const errors = {}
    const customers = useSelector(state => state.customers)
    const products = useSelector(state => state.products)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allbills())
    }, [dispatch])
    const handletoggle = () => {
        setToggle(!toggle)
    }

    const handlecustomerChange = (e) => {
        setcustomerid(e.target.value)

    }
    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const handleproductChange = (e) => {
        setProductid(e.target.value)
    }
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }
    const runValidation = () => {
        if (date.length === 0) {
            errors.date = 'date is required'
        }
        if (customerid.length === 0) {
            errors.customer = "please select customer"
        }
        if (productid.length === 0) {
            errors.product = "please select product"
        }
        if (quantity > 10) {
            errors.quantity = "product quantity must not be more than 10"
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormError({})
            const lineitems = { product: productid, quantity: parseInt(quantity) }
            const formdata = { date: date, customer: customerid, lineItems: lineitems }

            dispatch(addBill(formdata, handletoggle))
            setProductid('')
            setcustomerid('')
            setQuantity('')
        }

        else {
            setFormError(errors)
            setProductid('')
            setcustomerid('')
            setQuantity('')
        }
    }
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card" style={{ marginTop: '30px', width: '60%', height: "90%", marginLeft: "50px" }}>
                    <div className="card-body">
                        <h4 style={{ textAlign: 'center' }}>Generate Bill</h4>

                        <form onSubmit={handleSubmit}>
                            <input type="date" className="form-control" placeholder="select date" value={date} onChange={handleDateChange} />
                            {formError.date && <span style={{ color: 'red', fontSize: '12px' }}>{formError.date}</span>}<br />
                            <select className="form-control" onChange={handlecustomerChange}>
                                <option value=''>select customer</option>
                                {customers.map((el) => {
                                    return <option key={el._id} value={el._id} >{el.name}</option>
                                })}


                            </select>
                            {formError.customer && <span style={{ color: 'red', fontSize: '12px' }}> {formError.customer}</span>}
                            <br />
                            <select className="form-control" onChange={handleproductChange}>
                                <option value="">select product</option>
                                {products.map((el) => {
                                    return <option key={el._id} value={el._id}>{el.name}</option>
                                })}

                            </select>
                            {formError.product && <span style={{ color: 'red', fontSize: '12px' }}>{formError.product}</span>}
                            <br />
                            <input type="number" className="form-control" placeholder="enter quantity" min="1" max="10" value={quantity} onChange={handleQuantityChange} />
                            {formError.quantity && <span style={{ color: 'red', fontSize: '12px' }}>{formError.quantity}</span>}<br />
                            <input type="submit" className="btn btn-primary" value="generate Bill" /><br />
                        </form>
                    </div>
                </div>
            </div>

            {toggle && <div className="col-md-4"><Currentbill handletoggle={handletoggle} /></div>}

        </div>
    )
}

export default AddBill
