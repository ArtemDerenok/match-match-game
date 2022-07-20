import { openDB } from 'idb';
import type { IUser } from '../types/interfaces';

const dbUsers = openDB('usersDb', 1, {
    upgrade(db) {
      db.createObjectStore('users');
    }
  })

const setUserDb = async (key: string, val: IUser) => (await dbUsers).put('users', val, key);

export const getAllUsersDb = async () => (await dbUsers).getAll('users');

export default setUserDb;

