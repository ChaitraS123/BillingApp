import axios from 'axios'
import swal from 'sweetalert'
const addProduct = (product) => {
    return { type: 'ADD_PRODUCT', payload: product }
}

export const addproduct = (product) => {
    console.log(product)
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/products', product, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).
            then((response) => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                }
                else {
                    alert("product has been successfully added")
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
// export const getproduct = (id) => {
//     return (dispatch) => {
//         axios.get('http://dct-billing-app.herokuapp.com/api/products/:id', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).
//             then((response) => {
//                 const result = response.data
//                 if (result.hasOwnProperty("errors")) {
//                     alert(result.message)
//                 }
//                 else {
//                     dispatch(getProducts(result))
//                 }
//             })
//     }
// }
const deleteProducts = (id) => {
    return { type: 'REMOVE_PRODUCT', payload: id }
}

export const deleteproduct = (id) => {
    // console.log(id)
    return (dispatch) => {
        axios.get(`http://dct-billing-app.herokuapp.com/api/products/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).
            then((response) => {
                const result = response.data
                // console.log(result)
                if (result.hasOwnProperty("errors")) {
                    alert(result.message)
                }
                else {
                    dispatch(deleteProducts(result._id))
                }
            })
    }

}

const updateProducts = (product) => {
    return { type: 'UPDATE_PRODUCTS', payload: product }
}
export const updateproducts = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/products/:id', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).
            then((response) => {
                const result = response.data
                if (result.hasOwnProperty("errors")) {
                    alert(result.message)
                }
                else {
                    dispatch(updateProducts(result))
                }
            })
    }
}

export const viewProducts = (id) => {
    return (dispatch) => {
        axios.get(`http://dct-billing-app.herokuapp.com/api/products/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).
            then((response) => {
                const result = response.data
                if (result.hasOwnProperty("errors")) {
                    alert(result.message)
                }
                else {
                    swal(`Product name-${result.name}\n Product price-${result.price}`)

                    // console.log(result)
                }
            })
    }

}

