import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: {
    history: [],
  },
  reducers: {
    addToHistory: (state, action) => {
      let currentDateTime = new Date();
      let currentDate = moment(currentDateTime).format("DD-MM-YYYY");
      let currentTime = moment(currentDateTime).format("HH:mm:ss");

      let historyItem = {
        scoreTitle: action.payload.scoreTitle,
        scoreNumber: action.payload.scoreNumber,
        scoreId: action.payload.scoreId,
        date: currentDate,
        time: currentTime,
      };
      state.history.push({ key: Math.random().toString(), value: historyItem });
    },
    removeFromHistory: (state, action) => {
      state.history.splice(
        state.history.findIndex(
          (history) => history.key === action.payload.historyId
        ),
        1
      );
    },
    removeLastScoreFromHistory: (state, action) => {
      state.history.splice(
        state.history.findIndex(
          (history) => history.value.scoreId === action.payload.scoreId
        ),
        1
      );
    },
    removeAllFromHistory: (state) => {
      state.history = [];
    },
  },
});

export const addToHistory = addToHistory;
export const removeFromHistory = removeFromHistory;
export const removeLastScoreFromHistory = removeLastScoreFromHistory;
export const removeAllFromHistory = removeAllFromHistory;

export default historySlice.reducer;
