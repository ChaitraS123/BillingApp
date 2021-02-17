import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { allbills } from './actions/billaction'
import { customerAll } from './actions/customeraction'
import { allproducts } from './actions/productaction'
import { useDispatch } from 'react-redux'


const App = () => {
  const [loginstatus, setLoginstatus] = useState(false)
  const dispatch = useDispatch()
  const togglestatus = () => {
    setLoginstatus(!loginstatus)
  }
  useEffect(() => {
    dispatch(allbills())
    dispatch(customerAll())
    dispatch(allproducts())

  }, [dispatch])

  return (
    <div>
      <Navbar loginstatus={loginstatus} togglestatus={togglestatus} />


    </div>
  )
}
export default App;