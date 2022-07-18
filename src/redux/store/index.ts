import { configureStore } from '@reduxjs/toolkit';
import users from '../slices/usersSlice';
import settings from '../slices/settingsSlice';

const store = configureStore({
  reducer: {
    users,
    settings,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;
