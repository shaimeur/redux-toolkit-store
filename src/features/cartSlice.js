import {createSlice} from "@reduxjs/toolkit"
import { smartwatches } from "../data";

const initialState = {
    products : smartwatches,
    amount : 0,
    total : 0
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        incrementAmount: (state, { payload }) => {
            state.products = state.products.map(item =>
                item.name === payload.name ? { ...item, amount: item.amount + 1 } : item
            );
        },
    },
})
export const {incrementAmount} = cartSlice.actions;
export default cartSlice.reducer ;