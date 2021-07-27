import React, { useState } from 'react'
import { deletecustomer } from '../../actions/customeraction'
import { useDispatch } from 'react-redux'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import image from '../../img/avatr.png'
const CustomerItem = (props) => {
    const { id, name, mobile, email } = props;
    const dispatch = useDispatch()
    const removeCustomer = (id) => {
        const confirm = window.confirm("are u sure")
        if (confirm) {
            dispatch(deletecustomer(id))
        }
    }
    return (<div>
        <div className="card border-primary" style={{ width: '30%', marginLeft: '20px' }}>
            <div className="card-body">
                < div className="jumbotron">
                    <img src={`${image}`} style={{ height: '20%', width: '20%', marginLeft: '80px', marginTop: '2px' }} />
                    <h2>Name-{name}</h2>
                    <p>Mobile-{mobile}</p>
                    <p>Email-{email}</p>
                    <button className="btn btn-danger" onClick={() => { removeCustomer(id) }}><RiDeleteBin5Fill /></button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default CustomerItem