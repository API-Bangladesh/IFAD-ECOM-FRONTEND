import {createSlice} from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        subTotal: 0
    },
    reducers: {
        SET_CART_ITEM: (state, action) => {
            let item = action.payload;

            let items = [...state.items];
            items.push(item);

            state.items = items;
            CALC_SUB_TOTAL(state);
        },
        REMOVE_CART_ITEM: (state, action) => {
            const key = action.payload;
            state.items = state.items.filter((item, index) => index !== key);
            CALC_SUB_TOTAL(state);
        }
    }
});

function CALC_SUB_TOTAL(state) {
    let tmp = 0;
    state.items.map(item => tmp += item.total);
    state.subTotal = tmp;
}

export const {SET_CART_ITEM, REMOVE_CART_ITEM} = CartSlice.actions

export default CartSlice.reducer;
