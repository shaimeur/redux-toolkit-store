import {configureStore} from '@reduxjs/toolkit'
import {cartSlice as cartReducer} from "../features/cartSlice"


const store = configureStore({
        reducer : {
                cart : cartReducer,
        }
})

export default store