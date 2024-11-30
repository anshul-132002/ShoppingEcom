import { configureStore } from '@reduxjs/toolkit';
import CartSlice from '../Reduxtoolkit/CreateSlice'; 

export const store = configureStore({
  reducer: {
    cart:  CartSlice 
  },
});
