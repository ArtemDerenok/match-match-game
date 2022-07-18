import { openDB } from 'idb';

const dbUsers = openDB('usersDb', 1, {
    upgrade(db) {
      db.createObjectStore('users');
    }
  })

const setUserDb = async (key: any, val: any) => (await dbUsers).put('users', val, key);

export const getAllUsersDb = async () => (await dbUsers).getAll('users');

export default setUserDb;

