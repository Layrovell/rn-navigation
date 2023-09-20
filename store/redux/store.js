import { configureStore } from '@reduxjs/toolkit';

import favoriteReducer from './favorites';

export const store = configureStore({
  // reducer - diff slices of state (data) 
  // and actions that can change that data
  reducer: {
    favoriteMeals: favoriteReducer,
  }
});
