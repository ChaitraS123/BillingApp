import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const DashBoard = () => {

    const products = useSelector(state => state.products)
    const customers = useSelector(state => state.customers)
    const bills = useSelector(state => state.bills)

    let productarray = [];
    let salesarray = []
    let customerarray = []


    for (let i = products.length - 1; i >= products.length - 5; i--) {
        productarray.push(products[i])
    }
    for (let i = customers.length - 1; i >= customers.length - 5; i--) {
        customerarray.push(customers[i])
    }
    for (let i = bills.length - 1; bills >= bills.length - 5; i--) {
        salesarray.push(bills[i])
        console.log("sales", salesarray)
    }


    return (
        <div>
            <div className="jumbotron" style={{ width: '40%', marginLeft: '30%' }}>
                <h2>Total Sales-{bills.length}</h2>
                <h3>Total Products-{products.length}</h3>
                <h3>Total Customers-{customers.length}</h3>
            </div>
            <div>
                {products.length > 0 && <div>
                    <h2 style={{ textAlign: 'center' }}>Last 5 products</h2>
                    <table className="table  table-hover" border="1">
                        <thead className="thead-dark">
                            <tr>
                                <th>Sl no</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productarray.map((el, i) => {
                                return <tr key={el._id}>
                                    <td>{i + 1}</td>
                                    <td>{el.name}</td>
                                    <td>{el.price}</td>

                                </tr>
                            })}

                        </tbody>



                    </table>
                </div>}
            </div><div>
                {customers.length > 0 && <div>
                    <h2 style={{ textAlign: 'center' }}>Last 5 customers</h2>
                    <table className="table table-hover" border="1">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                            </tr>

                        </thead>
                        <tbody>
                            {customers.map((el) => {
                                return <tr key={el._id}>
                                    <td>{el.name}</td>
                                    <td>{el.mobile}</td>
                                    <td>{el.email}</td>

                                </tr>
                            })}

                        </tbody>


                    </table>
                </div>}




            </div>


        </div>
    )


}
export default DashBoard
