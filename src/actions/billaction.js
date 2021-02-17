import axios from 'axios'
import swal from 'sweetalert'

const allBills = (bill) => {
    return { type: 'ALL_BILLS', payload: bill }
}
export const allbills = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/bills', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                }
                else {
                    dispatch(allBills(result))
                }
            })


    }
}
const addbill = (result) => {
    return { type: 'ADD_BILL', payload: result }
}
export const addBill = (bill, handletoggle) => {

    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/bills', bill, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((response) => {
                const result = response.data
                console.log(result)
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                }
                else {
                    swal("added successfully")
                    dispatch(addbill(result))
                    console.log(result)
                    localStorage.setItem('billid', result._id)

                    handletoggle()




                }
            })
    }
}

const deletebill = (id) => {
    return { type: 'REMOVE_BILL', payload: id }
}
export const deleteBill = (id) => {
    return (dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty("errors")) {
                    alert(result.message)
                }
                else {
                    dispatch(deletebill(result._id))
                }

            })
    }
}


