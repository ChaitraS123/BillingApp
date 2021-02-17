import axios from 'axios'
import swal from 'sweetalert';


export const startRegisterUsers = (user, handleRedirect) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register', user)
            .then((response) => {
                const result = response.data
                console.log(result)
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                }
                else if (result.hasOwnProperty('errmsg')) {
                    swal("We are sorry this email exists!!Try with another email")

                }
                else {

                    handleRedirect()
                    swal("successfully registered")
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