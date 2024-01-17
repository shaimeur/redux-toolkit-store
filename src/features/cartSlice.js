import {createSlice} from "@reduxjs/toolkit"
import { smartwatches } from "../data";

const initialState = {
    products : smartwatches,
    amount : 0,
    total : 0
}

const cartSlice = createSlice({
    name : "cart",
    initialState
})

export default cartSlice.reducer ;