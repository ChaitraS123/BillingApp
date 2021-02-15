const initialcustomerstate = [];
const customerReducer = (state = initialcustomerstate, action) => {
    switch (action.type) {

        case 'ALL_CUSTOMERS': {
            return [...action.payload]

        }
        case 'ADD_CUSTOMER': {
            return [...state, action.payload]
        }
        case 'DELETE_CUSTOMER': {
            return state.filter((customer) => {
                return customer._id !== action.payload
            })
        }
        default: {
            return [...state]
        }

    }

}
export default customerReducer








