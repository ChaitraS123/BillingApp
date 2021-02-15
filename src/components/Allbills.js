import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBill } from '../actions/billaction'
import { customerList } from '../actions/customeraction'
import { allbills } from '../actions/billaction'
import { allproducts } from '../actions/productaction'

const Allbills = () => {
    const [name, setName] = useState('')
    const bills = useSelector(state => state.bills)
    const customers = useSelector(state => state.customers)
    // const products = useSelector = (state => state.products)
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    console.log(bills)
    useEffect(() => {
        dispatch(customerList());
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
    let arr = []
    let arr1 = []
    const customername = (id) => {
        console.log(id)
        const arr1 = customers.filter((el) => {
            return el._id === id
        })
        console.log("after applying", arr1[0]?.name)
        return arr1[0]?.name

    }
    const productname = (id) => {
        const arr = products.filter((el) => {
            return el._id === id
        })
        console.log("products", arr[0]?.name)
        return arr[0]?.name
    }




    return (
        <div>
            <h3>Total Bills-{bills.length}</h3>
            <h1 >Bill Details</h1>

            {bills.length === 0 ? <p>Please add bill</p> :
                <div className="card" style={{ width: '30%', marginLeft: '30px' }}>
                    <div className="card-body">

                        {bills.map((el) => {
                            return (<div><p key={el.id}>Invoice no:{el._id}</p>
                                <p> customer name-{customername(el.customer)}</p>
                                {el.lineItems.map((item) => {
                                    return (<div key={item._id}><p>Product name-{productname(item.product)}</p>
                                        <p>Quantity-{item.quantity}</p>
                                        <p>Price-{item.price}</p>
                                        <p>Total-{item.subTotal}</p>
                                        <button calssName="btn btn-danger" onClick={() => { removeItem(el._id) }}>remove</button>
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