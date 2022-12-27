import { createSlice } from "@reduxjs/toolkit"

const initialState = [];


const allCustomerSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addAllCustomer(state, action) {
            state.push(action.payload);
        },

        // remove(state, action) {
        //     return state.filter(item => item.id != action.payload);
        // },
        // removeAll(state, action){
        //     return state = [];
        // }
    }
})


export const { addAllCustomer } = allCustomerSlice.actions;
export default allCustomerSlice.reducer;