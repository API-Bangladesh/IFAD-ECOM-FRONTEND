import {createSlice} from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        SET_CART_ITEM: (state, action) => {
            let items = state.items;

            return action.payload
        },
        GET_CART_TOTAL: (state, action) => {
            return action.payload
        },
        REMOVE_CART_ITEM: (state, action) => {


            return action.payload
        },
        GET_CART_ITEMS: (state, action) => {
            return state.items;
        }
    }
})

export const {SET_CART_ITEM, GET_CART_TOTAL, REMOVE_CART_ITEM, GET_CART_ITEMS} = CartSlice.actions

export default CartSlice.reducer;
