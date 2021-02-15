import axios from 'axios'
import swal from 'sweetalert'

const createCustomer = (customer) => {
    return { type: 'ADD_CUSTOMER', payload: customer }

}

export const addcustomer = (customer) => {
    console.log("in customer action", customer)
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
                }
            })
    }

}
const customerall = (customer) => {
    return { type: 'All_CUSTOMERS', payload: customer }

}
export const customerList = () => {
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


export const getcustomer = (id) => {
    return (dispatch) => {

        axios.get('http://dct-billing-app.herokuapp.com/api/customers/:id', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty("errors")) {
                    alert(result.message)
                }
                else {
                    // dispatch(customerall(result))
                    console.log(result)
                }
            })
    }
}
const editcustomer = (customer) => {
    return { type: 'EDIT_CUSTOMER', payload: customer }
}
export const updatecustomer = (id) => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/customers/:id', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty("errors")) {
                    alert(result.message)
                }
                else {
                    dispatch(editcustomer(result))
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
export const viewCustomer = (id) => {
    // console.log(id)
    return (dispatch) => {
        axios.get(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).
            then((response) => {
                const result = response.data
                console.log(result)

                if (result.hasOwnProperty("errors")) {
                    alert(result.message)
                }
                else {
                    // dispatch(deleteCustomer(result._id))
                    swal(`Name-${result.name} ,\nemail-${result.email},\nmobile-${result.mobile}\n`)
                }
            })
    }


}