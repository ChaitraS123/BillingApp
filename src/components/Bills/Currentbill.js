import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Pdf from 'react-to-pdf'

const ref = React.createRef()
const Currentbill = (props) => {
    const customers = useSelector((state => state.customers))
    const products = useSelector((state) => state.products)
    const { handletoggle } = props
    const [billid, setBillid] = useState('')
    const [billdata, setBilldata] = useState({})
    const [user, setUser] = useState({})
    useEffect(() => {
        const res = localStorage.getItem('billid')


        setBillid(res)
    }, [billid])

    useEffect(() => {
        axios.get(`http://dct-billing-app.herokuapp.com/api/bills/${billid}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((response) => {

                setBilldata(response.data)
            })

    }, [billid])
    useEffect(() => {
        axios.get('http://dct-billing-app.herokuapp.com/api/users/account', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((response) => {

                setUser(response.data)
            })
    }, [])
    let arr = []
    let arr1 = []
    const customername = (id) => {
        arr = customers.filter((el) => {
            return el._id === id
        })
        // console.log(arr[0].name)
        return arr[0].name
    }
    const productname = (id) => {
        arr1 = products.filter((el) => {
            return el._id === id
        })
        return arr1[0].name
    }
    const logout = () => {
        handletoggle()
    }
    return (
        <div>

            <div style={{ width: 500, height: 500 }} ref={ref}>
                <h3 style={{ textAlign: ' center ', backgroundColor: 'gray' }}>INVOICE</h3>
                {user.businessName && <h4>{user.businessName.toUpperCase()}</h4>}
                {user.username && <h6>{user.username.toUpperCase()}</h6>}
                {user.email && <p>email:{user.email}</p>}
                {user.address && <p>Address:{user.address}</p>}

                {billdata.customer && <h6>customer name:{customername(billdata.customer)}</h6>}
                {billdata._id && <h6>INVOICE NO:{billdata._id}</h6>}
                {billdata.lineItems &&
                    <table className="table" border="1">
                        <thead className="table table-dark">
                            <tr>
                                <th>product name</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {billdata.lineItems.map((el) => {
                                return <tr key={el._id}>
                                    <td>{productname(el.product)}</td>
                                    <td>{el.price}</td>
                                    <td>{el.quantity}</td>
                                    <td>{el.subTotal}</td>

                                </tr>
                            })}
                        </tbody>

                    </table>}

                <h6>Thank you for shopping with us</h6>

                <h4>Regards</h4>
                {user.businessName && <p>{user.businessName.toUpperCase()}</p>}
            </div>
            <Pdf targetRef={ref} filename="invoice.pdf">
                {({ toPdf }) => (
                    <button className="btn btn-outline-primary" onClick={toPdf}>Generate pdf</button>
                )}
            </Pdf>
            <button className="btn btn-outline-danger" onClick={logout}>Cancel</button>
        </div>
    )
}
export default Currentbill