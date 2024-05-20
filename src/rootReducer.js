import { combineReducers } from '@reduxjs/toolkit';
import chatReducer from './container/Chat/chatSlice';
import createLessonReducer from './container/CreateLesson/createLessonSlice';
import registerReducer from './container/Register/registerSlice';
import loginReducer from './container/Login/loginSlice';
import learnReducer from './container/Learn/learnSlice';
import assigmentReducer from './common/AssigmentWrapper/assigmentSlice';
import targetReducer from './container/Target/targetSlice';

export const rootReducer = combineReducers({
  chatReducer,
  createLessonReducer,
  registerReducer,
  loginReducer,
  learnReducer,
  assigmentReducer,
  targetReducer,
});
