const billinitialstate = []

const billReducer = (state = billinitialstate, action) => {
    switch (action.type) {
        case 'ALL_BILLS': {
            return [...action.payload]
        }
        case 'ADD_BILL': {
            return [...state, action.payload]
        }
        case 'REMOVE_BILL': {
            return state.filter((bill) => {
                return bill._id !== action.payload
            })
        }

        default: {
            return [...state]
        }
    }

}
export default billReducer