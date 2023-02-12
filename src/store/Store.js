import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from '../components/category/categorySlices'
import courtReducer from '../components/court/courtSlices'
import paymentReducer from '../components/payment/paymentSlices'

export const store = configureStore({
    reducer:{
        categories : categoryReducer,
        courts:courtReducer,
        payments:paymentReducer
    }
})