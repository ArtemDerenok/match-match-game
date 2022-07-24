/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IGameLogic {
  firstAnswer: string | null,
  secondAnswer: string | null,
  rightAnswer: number,
  wrongAnswer: number,
  gameCnt: number,
  isBlockCards: boolean,
}

const initialState: IGameLogic ={
  firstAnswer: null,
  secondAnswer: null,
  rightAnswer: 0,
  wrongAnswer: 0,
  gameCnt: 0,
  isBlockCards: false,
}

const gameLogicSlice = createSlice({
  name: 'gameLogic',
  initialState,
  reducers: {
    setFirstAnswer: (state, action: PayloadAction<string>) => {
      state.firstAnswer = action.payload;
    },
    setSecondAnswer: (state, action: PayloadAction<string>) => {
      state.secondAnswer = action.payload;
    },
    setRightAnswer: (state) => {
      state.rightAnswer += 1;
      state.gameCnt += 1;
    },
    setWrongAnswer: (state) => {
      state.wrongAnswer += 1; 
    },
    resetAnswers: (state) => {
      state.firstAnswer = null;
      state.secondAnswer = null;
    },
    setBlock: (state) => {
      state.isBlockCards = true;
    },
    removeBlock: (state) => {
      state.isBlockCards = false;
    },
    resetAllSettings: () => initialState,
  }
});

const {actions, reducer} = gameLogicSlice;

export default reducer;
export const {
  setFirstAnswer,
  setSecondAnswer,
  setRightAnswer,
  setWrongAnswer,
  resetAnswers,
  setBlock,
  removeBlock,
  resetAllSettings,
} = actions;
