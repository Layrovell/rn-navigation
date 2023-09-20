import { createSlice } from '@reduxjs/toolkit';

// with toolkit u can mutate ur state to a mutable way
// cus toolkit will take care about it under the hood

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.ids.push(action.payload.id);
    },
    removeFavorite(state,action) {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  }
});

export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;
export default favoriteSlice.reducer;
