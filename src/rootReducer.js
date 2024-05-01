import { combineReducers } from '@reduxjs/toolkit';
import chatReducer from "./container/Chat/chatSlice";
import createLessonReducer from "./container/CreateLesson/createLessonSlice";

export const rootReducer = combineReducers({
    chatReducer,
    createLessonReducer
});
