import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const DashBoard = () => {
    const [bill, setBills] = useState([])
    console.log(bill)
    const products = useSelector(state => state.products)
    const customers = useSelector(state => state.customers)
    const bills = useSelector(state => state.bills)
    let arr = [1, 2, 3]
    // console.log("arr", arr)
    const lastproducts = () => {
        // let arr = [];
        for (let i = bills.length - 1; i >= 0; i--) {
            if (i >= bills.length - 5) {
                arr.push(bills[i])
                // setBills(arr)

            }


        }

        // return arr.length > 0 ? 
        //    {arr.map((el=>
        //     {

        //     })}
        // //     <h2>hiii</h2>
        // // </div> : 0 */}
        // // setBills(arr)

        // // console.log("hii")
        return arr.map((el) => {
            <li>{el}</li>
        })
    }


    return (
        <div>
            <div className="jumbotron" style={{ width: '40%', marginLeft: '30%' }}>
                <h2>Total bills-{bills.length}</h2>
                <h3>Total products-{products.length}</h3>
                <h3>Total Customers-{customers.length}</h3>
            </div>

            {/* {bills.length > 0 && lastproducts()}
            {arr.length > 0 && <div>
                 */}

        </div>
    )


}
export default DashBoard