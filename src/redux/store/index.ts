import { configureStore } from '@reduxjs/toolkit';
import users from '../slices/usersSlice';

const store = configureStore({
  reducer: {
    users,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});


export type RootState = ReturnType<typeof store.getState>;

export default store;
