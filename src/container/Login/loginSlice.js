import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    message: ""
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        actionEnd: (state) => {
            state.isLoading = false;
        },
        actionStart: (state) => {
            state.isLoading = true;
        },
        resetRedux: (state) => {
            state.isLoading = false
        },
        signinSuccess: (state, action) => {
            state.message = action.payload
        }
    },
});

export const selectIsLoading = (state) =>
    state.loginSlice.isLoading;

export const selectMessage = (state) =>
    state.loginSlice.message;

export default loginSlice.reducer;
