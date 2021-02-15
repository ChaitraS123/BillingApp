import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import customerReducer from '../reducers/customerReducer'
import productReducer from '../reducers/productReducer'
import billReducer from '../reducers/billReducer'

const configureStore = () => {
    const store = createStore(combineReducers({

        customers: customerReducer,
        products: productReducer,
        bills: billReducer



    }), applyMiddleware(thunk))
    return store
}
export default configureStore