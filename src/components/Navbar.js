import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Account from './Account'
import Customer from './Customers/Customer'
import Product from './Products/Product'
import AddBill from './Bills/AddBill'
import DashBoard from './DashBoard'
import Allbills from './Allbills'
import './navbar.css'

const Navbar = (props) => {
    const { loginstatus, togglestatus } = props

    const dispatch = useDispatch();

    const logout = () => {
        const confirm = window.confirm("are u sure")
        if (confirm) {
            localStorage.removeItem('token')
            togglestatus()
        }
    }
    return (

        <div>

            {loginstatus ? <div>
                <ul>
                    <li><Link to="/">Home</Link>{'/'}</li>
                    <li><Link to="/dashboard">Dashboard</Link>{'/'}</li>

                    <li> <Link to="/customer">Customer</Link>{'/'}</li>
                    <li> <Link to="/product">Products</Link>{'/'}</li>
                    <li> <Link to="/addbill">Add Bill</Link>{'/'}</li>
                    <li> <Link to="/allbill">All Bills</Link>{'/'}</li>
                    <li><Link to="/account">Account</Link>{'/'}</li>
                    <li><Link onClick={logout}>Logout</Link></li>
                </ul>
                <Route path="/account" component={Account} />
                <Route path="/customer" component={Customer} />
                <Route path="/product" component={Product} />
                <Route path="/addbill" component={AddBill} />
                <Route path="/dashboard" component={DashBoard} />
                <Route path="/allbill" component={Allbills} />
            </div> : <div>
                    <ul>

                        <li><Link to="/">Home</Link></li>
                        <li> <Link to="/register">Register</Link></li>
                        <li> <Link to="/login">Login</Link></li>
                    </ul>


                    <Route path="/" component={Home} exact={true} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" render={(props) => {
                        return <Login togglestatus={togglestatus} {...props} />
                    }} />
                </div>}


        </div>

    )
}
export default Navbar