import axios from 'axios'
import swal from 'sweetalert'
const addProduct = (product) => {
    return { type: 'ADD_PRODUCT', payload: product }
}

export const addproduct = (product) => {

    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/products', product, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).
            then((response) => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                }
                else {
                    swal("product has been successfully added")
                    dispatch(addProduct(result))
                }
            })
    }
}
const allProducts = (product) => {
    return { type: 'ALL_PRODUCTS', payload: product }
}

export const allproducts = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/products', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).
            then((response) => {
                const result = response.data
                if (result.hasOwnProperty("errors")) {
                    alert(result.message)
                }
                else {
                    dispatch(allProducts(result))
                }
            })
    }
}

const deleteProducts = (i) => {
    return { type: 'REMOVE_PRODUCT', payload: i }
}

export const deleteproduct = (id) => {

    return (dispatch) => {
        axios.get(`http://dct-billing-app.herokuapp.com/api/products/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).
            then((response) => {
                const result = response.data

                if (result.hasOwnProperty("errors")) {
                    alert(result.message)
                }
                else {

                    dispatch(deleteProducts(result._id))
                    swal('product has been successfully deleted')
                }
            })
    }

}

