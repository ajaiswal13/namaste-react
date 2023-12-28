import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",   //This key doesn't mater
    initialState: {
        items:[]
    },
    //Tn slice there are mutiple reducer functions.Hence the keyword 'reducers'
    reducers: {
        addItem: (state, action) => {
           /*In Vanilla Redux, mutating the state was PROHIBITED and returning newState was MANDATORY
              This is how we used to do things earlier,
              we used to create new state object and return that state object
              const newState = [...state];
              newState.items.push(action.payload);
              return newState;
           */
             
            // In redux toolkit,we can either mutate the state or return a new state
            // In case of mutating the state, redux toolkit does the following:
            // Behind the scenes, redux is creating an immutable object and doing all the things which we were
            // doing in Vanilla Redux. The only difference is that the overload of creating new state is not 
            // falling on the hands of developer. Redux is using IMMER library to do this.
            // IMMER library finds the diff between original state and mutated state and creates a immutable state
            state.items.push(action.payload);//Mutating the state
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

//At the end we are exporting one reducer which is combination of all the reducer functions(addItem,
// removeItem,clearCart)
export default cartSlice.reducer;