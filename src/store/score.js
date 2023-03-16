import { createSlice } from "@reduxjs/toolkit";
import { ALL_SCORE_INITIAL_ORDER } from "../data/ScoreIdentifiers";

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
    updateOrder: (state, action) => {
      state.order = action.payload.scoreOrder;
    },
  },
});

export const switchAubadeMatinale = scoreSlice.actions.switchAubadeMatinale;
export const switchMitantDesCamps = scoreSlice.actions.switchMitantDesCamps;
export const switchShowNumber = scoreSlice.actions.switchShowNumber;
export const updateOrder = scoreSlice.actions.updateOrder;

export default scoreSlice.reducer;
