/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { nanoid } from 'nanoid';
import setUserDb, { getAllUsersDb } from '../../db/index';
import type { IUser, MyFormValues } from '../../types/interfaces';

interface IInitialState {
  currentUser: IUser,
  users: Array<IUser>,
}

const initialState: IInitialState = {
  currentUser: {
    firstName: '',
    lastName: '',
    email: '',
    score: 0,
    id: '',
    avatar: null,
  },
  users: [], 
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers', 
   async () => {
      const response = await getAllUsersDb()
      return response;
   } 
);

export const postUser = createAsyncThunk(
  'users/postUser',
  async (data: MyFormValues) => {
    const newUser = {...data, id: nanoid(), score: 0}
    await setUserDb(newUser.id, newUser);
    return newUser;
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (data: IUser) => {
    await setUserDb(data.id, data);
    return data;
  }
)


const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setScore: (state, action: PayloadAction<number>) => {
      state.currentUser.score += action.payload; 
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Array<IUser>, string>) => {
        state.users.splice(0, state.users.length, ...action.payload);
      }); 
    builder.addCase(postUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.currentUser = action.payload;
        state.users.push(action.payload);
    });
    builder.addCase(updateUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.currentUser.score = 0;
        state.users.map((elem) => {
          if (elem.id === action.payload.id) {
            elem.score = action.payload.score
          }
          return elem;
        })
    })   
  }
})

const {actions, reducer} = userSlice;

export default reducer;
export const {
  setScore,
} = actions;

