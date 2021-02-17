import axios from 'axios'
import React, { useEffect, useState } from 'react'
import image from '../img/profile.png'

const Account = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get('https://dct-billing-app.herokuapp.com/api/users/account', { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
            .then((response) => {

                setUser(response.data)
            })
    }, [])
    return (
        <div className="card border-primary " style={{ width: '40%', left: '30%', marginTop: '50px' }}>
            <img className="card-img-top" className="img-rounded" style={{ width: '200px', margin: 'auto' }} src={`${image}`} alt="Card image cap"></img>
            <div className="card-body">


                {Object.keys(user).length > 0 &&
                    <div>
                        {user.businessName && <h4 style={{ color: 'blue' }}>{user.businessName.toUpperCase()}</h4>}
                        {user.username && <h5>{user.username.toUpperCase()}</h5>}

                        {user.email && <p style={{ fontWeight: 'Bold' }}>email us at:{user.email}</p>}
                        {user.address && <p style={{ fontWeight: 'Bold' }}>Address:{user.address}</p>}

                    </div>}
            </div>

        </div>
    )
}
export default Account