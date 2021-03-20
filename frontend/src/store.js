import{applyMiddleware, createStore, compose, combineReducers} from 'redux'
import thunk from "redux-thunk"
import {productDetailsReducer, productListReducer} from "./reducers/productReducers"

const initialState = {};
const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer
})
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState,
    composerEnhancer(applyMiddleware(thunk))
    );

export default store;