import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "score",
  initialState: {
    includeAubadeMatinale: false,
    includeMitantDesCamps: false,
  },
  reducers: {
    switchAubadeMatinale: (state) => {
      state.includeAubadeMatinale = !state.includeAubadeMatinale;
    },
    switchMitantDesCamps: (state) => {
        state.includeMitantDesCamps = !state.includeMitantDesCamps;
    },
  },
});

export const switchAubadeMatinale = scoreSlice.actions.switchAubadeMatinale;
export const switchMitantDesCamps = scoreSlice.actions.switchMitantDesCamps;

export default scoreSlice.reducer;
