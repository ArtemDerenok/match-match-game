/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ISettings {
  cardsType: string,
  difficulty: number,
}

const initialState: ISettings = {
  cardsType: 'animals',
  difficulty: 16,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setCardsType: (state, action: PayloadAction<string>) => {
      state.cardsType = action.payload;
    },
    setDifficulty: (state, action: PayloadAction<number>) => {
      state.difficulty = action.payload;
    }
  }
});

const {actions, reducer} = settingsSlice;

export default reducer;
export const {
  setCardsType,
  setDifficulty
} = actions;
