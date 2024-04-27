import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    history: [],
};

const chatSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        actionEnd: (state) => {
            state.isLoading = false;
        },
        actionStart: (state) => {
            state.isLoading = true;
        },
        chatSuccess: (state, action) => {
            state.history = action.payload
        }
    },
});

export const selectIsLoading = (state) =>
    state.chatReducer.isLoading;

export const selectHistory = (state) =>
    state.chatReducer.history;

export default chatSlice.reducer;
