import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from '../components/category/categorySlices'

export const store = configureStore({
    reducer:{
        categories : categoryReducer,
    }
})