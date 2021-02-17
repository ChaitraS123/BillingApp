import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Addcustomer from './Addcustomer'
import CustomerList from './CustomerList'


const Customer = () => {
    const customers = useSelector(state => state.customers)
    // console.log("customers", customers)
    return (
        <div>
            <Addcustomer />
            <CustomerList />

        </div>
    )
}
export default Customer