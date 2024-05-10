import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  listWord: [],
};

const assigmentSlice = createSlice({
  name: 'assigment',
  initialState,
  reducers: {
    actionEnd: (state) => {
      state.isLoading = false;
    },
    actionStart: (state) => {
      state.isLoading = true;
    },
    getListWordSuccess: (state, action) => {
      state.listWord = action.payload;
    },
  },
});

export const selectIsLoading = (state) => state.assigmentReducer.isLoading;

export const selectListWord = (state) => state.assigmentReducer.listWord;

export default assigmentSlice.reducer;
