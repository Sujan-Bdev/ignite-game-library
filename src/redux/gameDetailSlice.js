import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { gameDetailsURL, gameScreenshotURL } from "utils/api";

const initialState = {
  status: "idle",
  isLoading:true,
  gameDetail: {platforms:[]},
  screenshot: [],
};

export const fetchGameDetail = createAsyncThunk(
  "games/fetchGameDetail",
  async (game_id) => {
    const detailData = await axios.get(gameDetailsURL(game_id));
    const gameScreens = await axios.get(gameScreenshotURL(game_id));

    return { game: detailData.data, screenshot: gameScreens.data.results };
  }
);

const gameDetailSlice = createSlice({
  name: "gameDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGameDetail.pending]: (state) => {
      state.status = "loading";
      state.isLoading= true;

    },

    [fetchGameDetail.fulfilled]: (state, { payload }) => {
      state.status = "succceeded";
      state.gameDetail = payload.game;
      state.screenshot = payload.screenshot;
      state.isLoading= false;
    },

    [fetchGameDetail.rejected]: (state) => {
      state.status = "failed";
      state.isLoading= false;

    },
  },
});

export default gameDetailSlice.reducer;
