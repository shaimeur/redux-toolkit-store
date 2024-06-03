import { createSlice } from "@reduxjs/toolkit";
import { smartwatches } from "../data";

const initialState = {
    products: smartwatches.map(product => ({ ...product, amount: 0 })),
    amount: 0,
    total: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        incrementAmount: (state, { payload }) => {
            const product = state.products.find(item => item.name === payload.name);
            if (product) {
                product.amount += 1;
            }

            // Recalculate total
            state.total = state.products.reduce(
                (acc, item) => acc + item.price * item.amount,
                0
            );
        },
        decrementAmount: (state, { payload }) => {
            const product = state.products.find(item => item.name === payload.name);
            if (product  && product.amount > 0) {
                product.amount -= 1;
            }

            // Recalculate total
            state.total = state.products.reduce(
                (acc, item) => acc + item.price * item.amount,
                0
            );
        },
        clear : (state) => {
            state.products = initialState.products;
            state.amount = initialState.amount;
            state.total = initialState.total;
        }
    },
});

export const { incrementAmount,decrementAmount ,clear} = cartSlice.actions;
export default cartSlice.reducer;
