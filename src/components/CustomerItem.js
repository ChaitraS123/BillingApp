import React from 'react'
import { deletecustomer, updatecustomer, viewCustomer } from '../actions/customeraction'
import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { BsEyeFill } from 'react-icons/bs'
import { BsPencilSquare } from 'react-icons/bs'
import image from '../img/avatr.png'
import './navbar.css'



const CustomerItem = (props) => {
    const { id, name, mobile, email } = props;

    console.log(id, name, mobile, email)
    const dispatch = useDispatch()

    const removeCustomer = (id) => {
        console.log(id)
        console.log(typeof id, id)

        const confirm = window.confirm("are u sure")
        if (confirm) {
            dispatch(deletecustomer(id))

        }

    }
    const view = (id) => {
        dispatch(viewCustomer(id))
    }
    // const handleToggle = () => {
    //     setEditToggle(!editToggle)
    // }


    return (

        <div className="card border-primary" style={{ width: '35%', marginLeft: '20px' }}>

            <div className="card-body">
                < div className="jumbotron">
                    <img src={`${image}`} style={{ height: '20%', width: '20%', marginLeft: '80px', marginTop: '2px' }} />

                    <h2>Name-{name}</h2>
                    <p>Mobile-{mobile}</p>
                    <p>Email-{email}</p>
                    <button className="btn btn-danger" onClick={() => { removeCustomer(id) }}><RiDeleteBin5Fill /></button>
                    <button className="btn btn-success" onClick={() => { view(id) }}><BsEyeFill /></button>
                    {/* <button className="btn btn-primary" onClick={handleToggle()}><BsPencilSquare /></button> */}

                </div>
            </div>

        </div>

    )
}
export default CustomerItem