import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startloginUsers } from '../actions/Users'
import validator from 'validator'
import swal from 'sweetalert'
// import togglestate from '../actions/togglestate'

const Login = (props) => {
    const { togglestatus } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formError, setFormError] = useState({})
    const errors = {}
    const dispatch = useDispatch()
    // const loginstatus = useSelector((state) => state.userloginstatus)
    // console.log("loginstatus", loginstatus)
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlepasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const runValidation = () => {
        if (email.length === 0) {
            errors.email = "email cannot be blank"
        }
        else if (!validator.isEmail(email)) {
            errors.email = "invalid email"
        }
        if (password.length === 0) {
            errors.password = "password cannot be blank"
        }
        else if (password.length < 8 || password.length > 128) {
            errors.password = "password length must be from 8 to 126 characters"
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormError({})
            const data = { email: email, password: password }
            const handleRedirect = () => {
                swal("Yay!!! u have successfully logged in")
                props.history.push('/')
                togglestatus()
            }

            dispatch(startloginUsers(data, handleRedirect))

        }
        else {
            setFormError(errors)
            console.log(errors)
        }

    }
    return (
        <div className="card border-danger" style={{ width: "30%", marginTop: '100px', marginLeft: '450px' }}>
            <div className="card-body">
                <h3 style={{ textAlign: 'center' }}>Sign in</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" placeholder="enter email" value={email} onChange={handleEmailChange} />
                    {formError.email && <span style={{ color: 'red', fontSize: '11px' }}>{formError.email}</span>}<br />
                    <input type="password" className="form-control" placeholder="enter password" value={password} onChange={handlepasswordChange} />
                    {formError.password && <span style={{ color: 'red', fontSize: '11px' }}>{formError.password}</span>}<br />
                    <input type="submit" className="btn btn-primary" value="login" />
                </form>

            </div>

        </div>
    )
}
export default Login