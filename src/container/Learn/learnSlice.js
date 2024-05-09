import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    listLesson: [],
};

const lessonSlice = createSlice({
    name: 'learn',
    initialState,
    reducers: {
        actionEnd: (state) => {
            state.isLoading = false;
        },
        actionStart: (state) => {
            state.isLoading = true;
        },
        getListLessonSuccess: (state, action) => {
            state.listLesson = action.payload
        },
    },
});

export const selectIsLoading = (state) =>
    state.learnReducer.isLoading;

export const selectListLesson = (state) =>
    state.learnReducer.listLesson;

export default lessonSlice.reducer;

