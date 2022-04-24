import { createSlice } from '@reduxjs/toolkit';
import { getShoppingData } from './shop-data';

const initialState = {
  collections: getShoppingData(),
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  //   reducers: {},
});

// export const {} = shopSlice.actions;

export default shopSlice.reducer;
