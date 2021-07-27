import React, { useState } from 'react'
// import axios from 'axios'
import { useDispatch } from 'react-redux'
import { startRegisterUsers } from '../actions/Users'
import validator from 'validator';
import swal from 'sweetalert'

const Register = (props) => {
    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [businessName, setBussiness] = useState('')
    const [address, setAddress] = useState('')
    const [formError, setFormError] = useState({})
    const errors = {}
    const dispatch = useDispatch()
    
    const runValidations = () => {
        if (username.length === 0) {
            errors.name = "name cannot be blank"
        }
        else if (username.length <= 5) {
            errors.name = "name character must be more than 5"
        }
        if (password.length < 8 || password.length > 126) {
            errors.password = "password length must be from 8 to 126 characters"
        }
        if (businessName.length === 0) {
            errors.business = "this field is required"
        }
        if (address.length === 0) {
            errors.address = "this field is required"
        }
        if (email.length === 0) {
            errors.email = "email cannot be blank"
        }
        else if (!validator.isEmail(email)) {
            errors.email = "invalid email"
        }
    }
    const handleChange = (e) => {
        const attr = e.target.name
        if (attr === "name") {
            setName(e.target.value)

        }
        else if (attr === "email") {
            setEmail(e.target.value)
        }
        else if (attr === "password") {
            setPassword(e.target.value)
        }
        else if (attr === "bussiness") {
            setBussiness(e.target.value)
        }
        else if (attr === "address") {
            setAddress(e.target.value)
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        runValidations()
      
        if (Object.keys(errors).length === 0) {
            setFormError({})
            const formdata = { username: username, email: email, password: password, businessName: businessName, address: address }
            const handleRedirect = () => {
                props.history.push('/login')
               
            }

            dispatch(startRegisterUsers(formdata, handleRedirect))

            setName('')
            setEmail('')
            setPassword('')
            setBussiness('')
            setAddress('')

        }
        else {
            setFormError(errors)
            console.log(errors)
        }
        const cancel = () => {
            setName('')
            setEmail('')
            setBussiness('')
            setAddress('')
        }

    }
    return (
        <div className="card border-primary " style={{ width: "30%", margin: 'auto' }}>
            <div className="card-body" >
                <h3 style={{ textAlign: 'center', color: 'blue' }}>Sign Up</h3>
                <form onSubmit={handleSubmit}>

                    <input type="text" className="form-control" placeholder="enter name" name="name" value={username} onChange={handleChange} />
                    {formError.name && <span style={{ color: 'red', fontSize: '10px' }}>{formError.name}</span>}<br />
                    <input type="text" className="form-control" placeholder="enter email" name="email" value={email} onChange={handleChange} />
                    {formError.email && <span style={{ color: 'red', fontSize: '10px' }}>{formError.email}</span>}<br />
                    <input type="password" className="form-control" placeholder="enter password" name="password" value={password} onChange={handleChange} />
                    {formError.password && <span style={{ color: 'red', fontSize: '10px' }}>{formError.password}</span>}<br />
                    <input type="text" className="form-control" placeholder="enter business name" name="bussiness" value={businessName} onChange={handleChange} />
                    {formError.business && <span style={{ color: 'red', fontSize: '10px' }}>{formError.business}</span>}<br />
                    <input type="text" className="form-control" placeholder="enter address" name="address" value={address} onChange={handleChange} />

                    {formError.address && <span style={{ color: 'red', fontSize: '10px' }}>{formError.address}</span>}<br />
                    <input className="btn btn-primary" type="submit" value="register" />


                </form>
            </div>

        </div>
    )
}


export default Register