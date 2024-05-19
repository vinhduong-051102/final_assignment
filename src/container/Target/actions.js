import { createAction } from '@reduxjs/toolkit';
import * as constants from './constants';

export const actionStart = createAction(constants.ACTION_START);

export const actionEnd = createAction(constants.ACTION_END);

export const getListTarget = createAction(constants.GET_LIST_TARGET_ACTION)

export const getListTargetSuccess = createAction(constants.GET_LIST_TARGET_SUCCESS)
