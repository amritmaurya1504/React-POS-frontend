import { createSlice } from "@reduxjs/toolkit"

const initialState = [];


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },

        remove(state, action) {
            return state.filter(item => item.id != action.payload);
        },
        removeAll(state, action){
            return state = [];
        }
    }
})


export const { add, remove, removeAll } = cartSlice.actions;
export const selectTotal = (state) => state.cart.reduce((total , item) => total + item.price , 0);
export default cartSlice.reducer;