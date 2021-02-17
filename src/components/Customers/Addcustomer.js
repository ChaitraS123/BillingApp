import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addcustomer } from '../../actions/customeraction'
import validator from 'validator'
import Customerform from './Customerform'

const Addcustomer = () => {
    const dispatch = useDispatch()
    const formSubmit = (data) => {
        console.log(data, "in add customer")
        dispatch(addcustomer(data))
    }


    return (
        <div>

            <Customerform formSubmit={formSubmit} />


        </div>
    )
}
export default Addcustomer;