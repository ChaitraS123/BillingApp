import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const DashBoard = () => {

    const products = useSelector(state => state.products)
    const customers = useSelector(state => state.customers)
    const bills = useSelector(state => state.bills)




    return (
        <div>
            <div className="jumbotron" style={{ width: '30%', marginLeft: '30%', marginTop: '5%' }}>

                {bills.length > 0 ? <h2>Total sales-{bills.length}</h2> : <h2>Total Sales-0</h2>}
                {products.length > 0 ? <h2>Total products-{products.length}</h2> : <h2>Total products-0</h2>}
                {customers.length > 0 ? <h2>Total customers-{customers.length} </h2> : <h2>Total customers -0</h2>}
            </div>


        </div >
    )


}
export default DashBoard
