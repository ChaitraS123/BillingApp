import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addcustomer } from '../actions/customeraction'

const Addcustomer = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')

    const handlenameChange = (e) => {
        setName(e.target.value)
    }
    const handlemobilechange = (e) => {
        setMobile(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata = { name: name, mobile: mobile, email: email }
        dispatch(addcustomer(formdata))
    }
    return (
        <div>
            <h3>Add customer</h3>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter name" value={name} onChange={handlenameChange} />
                        <input type="text" placeholder="Enter mobile" value={mobile} onChange={handlemobilechange} />
                        <input type="text" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                        <input type="submit" className="btn btn-primary" value="add customer" />
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Addcustomer;