import { combineReducers } from '@reduxjs/toolkit';
import chatReducer from "./container/Chat/chatSlice";
import createLessonReducer from "./container/CreateLesson/createLessonSlice";
import registerSlice from "./container/Register/registerSlice";
import loginSlice from "./container/Login/loginSlice";

export const rootReducer = combineReducers({
    chatReducer,
    createLessonReducer,
    registerSlice,
    loginSlice
});
