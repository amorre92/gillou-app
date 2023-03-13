import { createSlice } from "@reduxjs/toolkit";
import {
  AIR_CLASSIQUE_ID,
  ALL_SCORE_INITIAL_ORDER,
  AMBULANT_ID,
} from "../data/ScoreIdentifiers";

const scoreSlice = createSlice({
  name: "score",
  initialState: {
    includeAubadeMatinale: false,
    includeMitantDesCamps: false,
    showNumber: true,
    order: ALL_SCORE_INITIAL_ORDER,
  },
  reducers: {
    switchAubadeMatinale: (state) => {
      state.includeAubadeMatinale = !state.includeAubadeMatinale;
    },
    switchMitantDesCamps: (state) => {
      state.includeMitantDesCamps = !state.includeMitantDesCamps;
    },
    switchShowNumber: (state) => {
      state.showNumber = !state.showNumber;
    },
    changeOrder: (state) => {
      state.order = state.order.reverse();
    },
  },
});

export const switchAubadeMatinale = scoreSlice.actions.switchAubadeMatinale;
export const switchMitantDesCamps = scoreSlice.actions.switchMitantDesCamps;
export const switchShowNumber = scoreSlice.actions.switchShowNumber;
export const changeOrder = scoreSlice.actions.changeOrder;

export default scoreSlice.reducer;
