import {createSlice} from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        subTotal: 0,
        shippingCharge: 0,
        discount: 0,
        tax: 0,
        grandTotal: 0,
        billingAddress: '',
        shippingAddress: '',
        paymentMethodId: '',
    },
    reducers: {
        SET_CART_ITEM: (state, action) => {
            let item = action.payload;

            let items = [...state.items];
            items.push(item);

            state.items = items;
            CALC_SUB_TOTAL(state);
        },
        UPDATE_ITEM_QUANTITY: (state, action) => {
            let {key, quantity} = action.payload;

            state.items = state.items.filter((item, index) => {
                if (index === key) {
                    item.quantity = quantity;
                    item.total = quantity * item.unit_price;
                }

                return item;
            });

            CALC_SUB_TOTAL(state);
        },
        UPDATE_PAYMENT_METHOD_ID: (state, action) => {
            state.paymentMethodId = action.payload
        },
        UPDATE_BILLING_ADDRESS: (state, action) => {
            state.billingAddress = action.payload
        },
        UPDATE_SHIPPING_ADDRESS: (state, action) => {
            state.shippingAddress = action.payload
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
    state.grandTotal = tmp;
}

export const {SET_CART_ITEM, UPDATE_ITEM_QUANTITY, UPDATE_PAYMENT_METHOD_ID, REMOVE_CART_ITEM, UPDATE_BILLING_ADDRESS, UPDATE_SHIPPING_ADDRESS} = CartSlice.actions

export default CartSlice.reducer;
