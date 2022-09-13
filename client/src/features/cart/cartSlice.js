import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        totalPrice: 0,
    },
    reducers: {
        // payload is a object with product's detail
        addProduct: (state, {payload}) => {
            state.quantity += 1;
            state.products.push(payload);
            state.totalPrice += parseFloat(payload.price.replace('$',''));
        },
        // payload is a product index from product array
        removeProduct: (state, {payload}) => {
            state.quantity -= 1;
            state.products.splice(payload.index,1);
            state.totalPrice -= parseFloat(payload.price.replace('$',''))
        },
        clearCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.totalPrice = 0;

          },
    },
});

export const { addProduct, clearCart, removeProduct } = cartSlice.actions
export default cartSlice.reducer;