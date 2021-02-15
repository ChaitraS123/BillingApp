import axios from 'axios'
import swal from 'sweetalert';

// export const startRegisterUsers = (user) => {
//     return axios.post('http://dct-billing-app.herokuapp.com/api/users/register', user)
//         .then((response) => {
//             const result = response.data
//             console.log(result)
//             if (result.hasOwnProperty('errors')) {
//                 alert(result.message)
//             }
//             else {
//                 alert("successfully posted")
//             }
//         })
//         .catch((err) => {
//             alert(err.message)
//         })
// }
export const startRegisterUsers = (user, handleRedirect) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register', user)
            .then((response) => {
                const result = response.data
                console.log(result)
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                }
                else {
                    alert("successfully posted")
                    handleRedirect()
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}
export const startloginUsers = (user, handleRedirect) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/users/login', user)
            .then((response) => {
                const result = response.data
                console.log(result)
                if (result.hasOwnProperty('errors')) {
                    swal("incorrect email id and password")
                }
                else {

                    handleRedirect()

                    localStorage.setItem('token', result.token)

                }
            })
            .catch((err) => {
                alert(err.message)
            })


    }
}