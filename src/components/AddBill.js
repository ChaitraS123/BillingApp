import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addBill } from '../actions/billaction'
import DatePicker from "react-datepicker";
import { addcustomer } from '../actions/customeraction';
import { allbills } from '../actions/billaction'
import Currentbill from './Currentbill';



const AddBill = () => {
    const [date, setDate] = useState('')
    const [toggle, setToggle] = useState(false)
    console.log(toggle)

    const [customerid, setcustomerid] = useState('')
    const [productid, setProductid] = useState('')
    const [quantity, setQuantity] = useState('')
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
        // localStorage.setItem('customerid',customerid)
    }


    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const handleproductChange = (e) => {
        setProductid(e.target.value)
        //     localStorage.setItem('productid',productid)
        // }
    }
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const lineitems = { product: productid, quantity: parseInt(quantity) }
        const formdata = { date: date, customer: customerid, lineItems: lineitems }

        dispatch(addBill(formdata, handletoggle))

        // settogglebill(true)




    }



    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card" style={{ marginTop: '30px', width: '60%', height: "90%", marginLeft: "50px" }}>
                    <div className="card-body">
                        <h4 style={{ textAlign: 'center' }}>Generate Bill</h4>

                        <form onSubmit={handleSubmit}>
                            {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /><br /> */}
                            <input type="date" className="form-control" placeholder="select date" value={date} onChange={handleDateChange} /><br />
                            <select className="form-control" onChange={handlecustomerChange}>
                                <option value=''>select customer</option>
                                {customers.map((el) => {
                                    return <option key={el._id} value={el._id} >{el.name}</option>
                                })}

                            </select><br />
                            <select className="form-control" onChange={handleproductChange}>
                                <option value="">select product</option>
                                {products.map((el) => {
                                    return <option key={el._id} value={el._id}>{el.name}</option>
                                })}

                            </select><br />
                            <input type="number" className="form-control" placeholder="enter quantity" value={quantity} onChange={handleQuantityChange} /><br />

                            <input type="submit" className="btn btn-primary" value="generate Bill" /><br />
                        </form>
                    </div>
                </div>
            </div>
            {/* {toggle && <div>
                <Currentbill handletoggle={handletoggle} />
            </div>} */}
            {toggle && <div className="col-md-4"><Currentbill handletoggle={handletoggle} /></div>}

        </div>
    )
}

export default AddBill
