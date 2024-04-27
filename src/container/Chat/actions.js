import { createAction } from '@reduxjs/toolkit';
import * as constants from './constants';

export const actionStart = createAction(constants.ACTION_START);

export const actionEnd = createAction(constants.ACTION_END);

export const chat = createAction(constants.CHAT_ACTION)

export const chatSuccess = createAction(constants.CHAT_SUCCESS)
