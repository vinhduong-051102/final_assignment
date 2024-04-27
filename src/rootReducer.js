import { combineReducers } from '@reduxjs/toolkit';
import chatReducer from "./container/Chat/chatSlice";

export const rootReducer = combineReducers({
    chatReducer,
});
