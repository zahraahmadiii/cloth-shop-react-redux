import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalPrice: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {

            const index = state.cartItems.findIndex(item => item.id === action.payload.id)

            if (index >= 0) {
                state.cartItems[index] = {
                    ...state.cartItems[index],
                    quantity: state.cartItems[index].quantity + 1
                }
            } else {
                const newCartItem = { ...action.payload, quantity: 1 }
                state.cartItems.push(newCartItem)
            }
            state.cartTotalQuantity++
            state.cartTotalPrice = (Number(state.cartTotalPrice) + Number(action.payload.price)).toFixed(2)
        
        },
        deleteFromCart(state, action){
            const index = state.cartItems.findIndex(item => item.id === action.payload.id)
            if(index>=0){
                console.log(state.cartItems[index].quantity);
                if( state.cartItems[index].quantity > 0){
                    console.log("inif");
                    state.cartItems[index] = {
                        ...state.cartItems[index],
                        quantity:  state.cartItems[index].quantity - 1
                    }
                 } 
                 if (state.cartItems[index].quantity === 0){
                    console.log("in second if");
                    state.cartItems.splice(index,1)
                 }
                 state.cartTotalQuantity--
                 state.cartTotalPrice = (Number(state.cartTotalPrice) - Number(action.payload.price)).toFixed(2)     
            }
        },
        emptyCart(state, action){
            state.cartItems = [];
            state.cartTotalPrice = 0;
            state.cartTotalQuantity = 0;
        }
    }
})
export const {
    addToCart,
    deleteFromCart,
    emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;