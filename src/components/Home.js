import React from 'react'
import background from '../img/bill.jpg'
import './navbar.css'

const Home = () => {
    return (
        <div>
            <marquee style={{ fontWeight: 'bold', fontSize: "50px", color: 'red' }}>Billing App Software</marquee>
            <img src={`${background}`} alt="billing software" className="image" />


        </div>
    )
}
export default Home;
