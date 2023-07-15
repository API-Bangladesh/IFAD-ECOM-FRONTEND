import {createSlice} from '@reduxjs/toolkit'
import {SUBSCRIPTION} from "../../utils/enums";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        item: [],
        billing_type: SUBSCRIPTION.BILLING_TYPE_MONTHLY,
        payment_method: '',
        is_renew: false,
        invoice_number: '',
    },
    reducers: {
        SET_CART_ITEM: (state, action) => {
            state.item = action.payload;
        },
        SET_BILLING_TYPE: (state, action) => {
            state.billing_type = action.payload;
        },
        SET_PAYMENT_METHOD: (state, action) => {
            state.payment_method = action.payload;
        },
        SET_IS_RENEW: (state, action) => {
            state.is_renew = action.payload;
        },
        RESET_IS_RENEW: (state, action) => {
            state.is_renew = '';
        },
        SET_INVOICE_NUMBER: (state, action) => {
            state.invoice_number = action.payload;
        },
        RESET_INVOICE_NUMBER: (state, action) => {
            state.invoice_number = '';
        },
        RESET_CART_ITEM: (state, action) => {
            state.item = {};
        },
        RESET_CART: (state, action) => {
            state.item = {};
            state.payment_method = '';
            state.is_renew = false;
            state.invoice_number = '';
        },
    }
});

export const {
    SET_CART_ITEM,
    SET_BILLING_TYPE,
    SET_PAYMENT_METHOD,
    SET_IS_RENEW,
    SET_INVOICE_NUMBER,
    RESET_CART
} = cartSlice.actions;

export default cartSlice.reducer;
