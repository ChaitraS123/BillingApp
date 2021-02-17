import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBill } from '../actions/billaction'
import { customerAll } from '../actions/customeraction'
import { allbills } from '../actions/billaction'
import { allproducts } from '../actions/productaction'
import { RiDeleteBin3Fill } from 'react-icons/ri'

const Allbills = () => {

    const bills = useSelector(state => state.bills)
    const customers = useSelector(state => state.customers)
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    console.log(bills)
    useEffect(() => {
        dispatch(customerAll());
        dispatch(allbills())
        dispatch(allproducts())


    }, [dispatch])

    const removeItem = (id) => {
        console.log(id)

        const confirm = window.confirm("are u sure")
        if (confirm) {
            dispatch(deleteBill(id))

        }
    }

    const customername = (id) => {
        console.log(id)
        const arr1 = customers.filter((el) => {
            return el._id === id
        })

        return arr1[0]?.name

    }
    const productname = (id) => {
        const arr = products.filter((el) => {
            return el._id === id
        })

        return arr[0]?.name
    }




    return (
        <div>
            <h1 >Bill Details</h1>

            {bills.length === 0 ? <p>Please add bill</p> :
                <div className="card" style={{ width: '40%', marginLeft: '30px' }}>
                    <div className="card-body">

                        {bills.map((el) => {
                            return (<div><p key={el.id}>Invoice no:{el._id}</p>
                                <p> customer name-{customername(el.customer)}</p>
                                {el.lineItems.map((item) => {
                                    return (<div key={item._id}><p>Product name-{productname(item.product)}</p>
                                        <p>Quantity-{item.quantity}</p>
                                        <p>Price-{item.price}</p>
                                        <p>Total-{item.subTotal}</p>
                                        <button className="btn btn-danger" onClick={() => { removeItem(el._id) }}><RiDeleteBin3Fill /></button>
                                        <hr />
                                    </div>)
                                })}
                            </div>)
                        })}
                    </div>


                </div>
            }


        </div>
    )
}
export default Allbills