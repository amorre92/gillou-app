import { createSlice } from "@reduxjs/toolkit";
import moment from "moment/moment";

const historySlice = createSlice({
  name: "history",
  initialState: [],
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
      state.push({ key: Math.random().toString(), value: historyItem });
    },
    removeFromHistory: (state, action) => {
      state.splice(
        state.findIndex((history) => history.key === action.payload.historyId),
        1
      );
    },
    removeLastScoreFromHistory: (state, action) => {
      state.splice(
        state.findIndex(
          (history) => history.value.scoreId === action.payload.scoreId
        ),
        1
      );
    },
    removeAllFromHistory: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const addToHistory = historySlice.actions.addToHistory;
export const removeFromHistory = historySlice.actions.removeFromHistory;
export const removeLastScoreFromHistory =
  historySlice.actions.removeLastScoreFromHistory;
export const removeAllFromHistory = historySlice.actions.removeAllFromHistory;

export default historySlice.reducer;
