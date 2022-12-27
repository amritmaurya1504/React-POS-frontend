import { createSlice } from "@reduxjs/toolkit"

const initialState = [];


const placedOrderSlice = createSlice({
    name: "placedItem",
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },

        // remove(state, action) {
        //     return state.filter(item => item.id != action.payload);
        // },
    }
})


export const { add, remove } = placedOrderSlice.actions;
// export const selectTotal = (state) => state.cart.reduce((total , item) => total + item.price , 0);
export default placedOrderSlice.reducer;