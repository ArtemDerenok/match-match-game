/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusApp } from '../../types/interfaces';

interface IInitialState {
  statusApp: StatusApp;
}

const initialState: IInitialState = {
  statusApp: StatusApp.REGISTER,
};

const statusAppSlice = createSlice({
  name: 'statusApp',
  initialState,
  reducers: {
      setStatusApp: (state, action: PayloadAction<StatusApp>) => {
        state.statusApp = action.payload
      }
  }
})

const {actions, reducer} = statusAppSlice;

export default reducer;
export const {
  setStatusApp,
} = actions;
