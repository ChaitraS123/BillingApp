import axios from 'axios'
import swal from 'sweetalert'

const customerall = (cust) => {

    return { type: 'All_CUSTOMER', payload: cust }

}
export const customerAll = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/customers', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty("errors")) {
                    alert(result.message)
                }
                else {

                    dispatch(customerall(result))
                }
            })
    }
}


const createCustomer = (customer) => {
    return { type: 'ADD_CUSTOMER', payload: customer }

}

export const addcustomer = (customer) => {

    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/customers', customer, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((response) => {
                const result = response.data
                console.log(result)
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                }
                else {
                    dispatch(createCustomer(result))
                    swal("customer has been successfully added")
                }
            })
    }

}
const deleteCustomer = (id) => {
    return { type: 'DELETE_CUSTOMER', payload: id }
}
export const deletecustomer = (id) => {
    return (dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).
            then((response) => {
                const result = response.data

                if (result.hasOwnProperty("errors")) {
                    alert(result.message)
                }
                else {
                    dispatch(deleteCustomer(result._id))
                }
            })
    }


}
