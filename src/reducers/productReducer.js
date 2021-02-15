const initialproductState = []

const productReducer = (state = initialproductState, action) => {
    switch (action.type) {
        case 'ALL_PRODUCTS': {
            return [...action.payload]
        }
        case 'ADD_PRODUCT': {
            return [...state, action.payload]
        }
        case 'REMOVE_PRODUCT': {
            return state.filter((product) => {
                return product._id !== action.payload
            })
        }
        default: {
            return [...state]
        }
    }


}

export default productReducer

