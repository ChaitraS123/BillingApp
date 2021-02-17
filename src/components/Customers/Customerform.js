import React, { useState } from 'react'
import validator from 'validator'

const Customerform = (props) => {
    const { formSubmit } = props
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [formError, setFormError] = useState({})
    const errors = {}

    const handlenameChange = (e) => {
        setName(e.target.value)
    }
    const handlemobilechange = (e) => {
        setMobile(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const runValidation = () => {
        if (name.length === 0) {
            errors.name = "name cannot be empty"
        }
        if (mobile.length === 0 || mobile.length < 10) {
            errors.mobile = "Enter 10 digit number"
        }
        if (email.length === 0) {
            errors.email = "email cannot be blank"
        }
        else if (!validator.isEmail(email)) {
            errors.email = "invalid email"
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormError({})
            const formdata = { name: name, mobile: mobile, email: email }
            formSubmit(formdata)
            setName('')
            setMobile('')
            setEmail('')


        }
        else {
            setFormError(errors)
            setName('')
            setMobile('')
            setEmail('')

        }
    }

    return <div>
        <div className="card">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Enter name" value={name} onChange={handlenameChange} />
                            {formError.name && <span style={{ color: 'red', fontSize: '12px' }}>{formError.name}</span>}
                        </div>
                        <div className="col-md-3">
                            <input type="tel" className="form-control" placeholder="Enter mobile" value={mobile} onChange={handlemobilechange} />
                            {formError.mobile && <span style={{ color: 'red', fontSize: '12px' }}>{formError.mobile}</span>}
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                            {formError.email && <span style={{ color: 'red', fontSize: '12px' }}>{formError.email}</span>}
                        </div>
                        <div className="col-md-3">
                            <input type="submit" className="btn btn-primary" value="add customer" />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
}
export default Customerform

