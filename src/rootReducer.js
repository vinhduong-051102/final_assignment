import { combineReducers } from '@reduxjs/toolkit';
import chatReducer from "./container/Chat/chatSlice";
import createLessonReducer from "./container/CreateLesson/createLessonSlice";
import registerReducer from "./container/Register/registerSlice";
import loginReducer from "./container/Login/loginSlice";
import learnReducer from "./container/Learn/learnSlice";

export const rootReducer = combineReducers({
    chatReducer,
    createLessonReducer,
    registerReducer,
    loginReducer,
    learnReducer
});
