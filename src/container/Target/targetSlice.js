import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  message: '',
  listTarget: []
};

const targetSlice = createSlice({
  name: 'target',
  initialState,
  reducers: {
    actionEnd: (state) => {
      state.isLoading = false;
    },
    actionStart: (state) => {
      state.isLoading = true;
    },
    getListTargetSuccess: (state, action) => {
      state.listTarget = action.payload;
    },
    resetRedux: (state) => {
      state.isLoading = false;
      state.message = '';
      state.listTarget = []
    },
  },
});

export const selectIsLoading = (state) => state.targetReducer.isLoading;

export const selectMessage = (state) => state.targetReducer.message;

export const selectListTarget = (state) => state.targetReducer.listTarget

export default targetSlice.reducer;
