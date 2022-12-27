import { createSlice } from "@reduxjs/toolkit"


const customerSlice = createSlice({
    name: "customer",
    initialState : [],
    reducers: {
        addCustomer(state, action) {
            state.push(action.payload);
        },

        removeCustomer(state, action) {
            return state = [];
        },
    }
})


export const { addCustomer , removeCustomer} = customerSlice.actions;
export default customerSlice.reducer;