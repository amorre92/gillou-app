import { createSlice } from "@reduxjs/toolkit";

const toneSlice = createSlice({
  name: "tone",
  initialState: { value: "sib" },
  reducers: {
    switchTone: (state) => {
      if (state.value === "sib") {
        state.value = "mib";
      } else {
        state.value = "sib";
      }
    },
  },
});

export const switchTone = toneSlice.actions.switchTone;

export default toneSlice.reducer;
