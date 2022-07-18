/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { getAllUsersDb } from '../../db/index';

interface IUser {
  firstName: string,
  lastName: string,
  email: string,
  score: number,
  id: string,
}

const initialState: Array<IUser> = [];

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers', 
   async () => {
      const response = await getAllUsersDb()
      return response;
   } 
  )

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Array<IUser>, string>) => {
        state.splice(0, state.length, ...action.payload);
      })    
  }
})

const {reducer} = userSlice;

export default reducer;

