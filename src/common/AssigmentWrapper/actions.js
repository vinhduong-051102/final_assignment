import { createAction } from '@reduxjs/toolkit';
import * as constants from './constants';

export const actionStart = createAction(constants.ACTION_START);

export const actionEnd = createAction(constants.ACTION_END);

export const getListWord = createAction(constants.GET_LIST_WORD_ACTION);

export const getListWordSuccess = createAction(constants.GET_LIST_WORD_SUCCESS);
