import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import customerReducer from "./customerSlice"
import placedOrderSlice from "./placedOrderSlice";
import allCustomerReducer from "./allCustomerSlice"

const store = configureStore({
    reducer : {
        cart : cartReducer,
        customer : customerReducer,
        ordered : placedOrderSlice,
        allcustomer : allCustomerReducer
    }
})


export default store;