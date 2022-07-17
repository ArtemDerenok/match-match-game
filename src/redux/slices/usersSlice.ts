/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  firstName: string,
  lastName: string,
  email: string,
  score: number,
}

const initialState: Array<IUser> = [
    {
      firstName: 'Artem',
      lastName: 'Derenok',
      email: 'defasdfa@mail.ru',
      score: 30,
    },
    {
      firstName: 'Ivan',
      lastName: 'Petrov',
      email: 'defasdfa@mail.ru',
      score: 45,
    },
  ]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersFetched: (state, action: PayloadAction<Array<IUser>, string>) => {
      state = action.payload
    },
  }
})

const {actions, reducer} = userSlice;

export default reducer;
export const {
  usersFetched
} = actions;
