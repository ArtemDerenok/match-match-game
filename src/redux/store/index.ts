import { configureStore } from '@reduxjs/toolkit';
import users from '../slices/usersSlice';
import settings from '../slices/settingsSlice';
import statusApp from '../slices/statusAppSlice';
import gameLogic from '../slices/gameLogicSlice';

const store = configureStore({
  reducer: {
    users,
    settings,
    statusApp,
    gameLogic,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;
