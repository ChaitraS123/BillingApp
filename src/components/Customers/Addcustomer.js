import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addcustomer } from '../../actions/customeraction'
import Customerform from './Customerform'

const Addcustomer = () => {
    const dispatch = useDispatch()
    const formSubmit = (data) => {
        dispatch(addcustomer(data))
    }


    return (
        <div>

            <Customerform formSubmit={formSubmit} />


        </div>
    )
}
export default Addcustomer;