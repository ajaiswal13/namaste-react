import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    // This is onr reducer which consists of multiple reducers/slices
    reducer: {
        cart: cartReducer  //Redux takes the store name from the key ex. 'cart' - Try changing this in 
                            // react devtools
    }
});
export default appStore;