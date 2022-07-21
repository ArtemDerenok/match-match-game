export enum StatusApp {
  REGISTER = 'REGISTER',
  START_GAME = 'START_GAME',
  STOP_GAME = 'STOP_GAME',
}

export interface MyFormValues {
  firstName: string,
  lastName: string,
  email: string,
  avatar: string | null,
}

export interface IUser {
  firstName: string,
  lastName: string,
  email: string,
  score: number,
  id: string,
  avatar: string | null,
}
