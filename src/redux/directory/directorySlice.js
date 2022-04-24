import { createSlice } from '@reduxjs/toolkit';
import { getSectionData } from './directory-data';

const initialState = {
  sections: getSectionData(),
};

const directorySlice = createSlice({
  name: 'directory',
  initialState,
  // reducers: {},
});

// export const {} = directorySlice.actions;

export default directorySlice.reducer;
