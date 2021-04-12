import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
 
} from "utils/api";

const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  status: "idle",
  
};

export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
  const popular = await axios.get(popularGamesURL());
  const upcoming = await axios.get(upcomingGamesURL());
  const newData = await axios.get(newGamesURL());

  return {
    popularGames: popular.data.results,
    upcomingGames: upcoming.data.results,
    newGames: newData.data.results,
  };
});



const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGames.pending]: (state) => {
      state.status = "loading";
    },
    [fetchGames.fulfilled]: (state, action) => {
      state.status = "succceeded";
      state.popular = state.popular.concat(action.payload.popularGames);
      state.newGames = state.newGames.concat(action.payload.newGames);
      state.upcoming = state.upcoming.concat(action.payload.upcomingGames);
    },
    [fetchGames.rejected]: (state) => {
      state.status = "failed";
    },
    
  },
});

export default gameSlice.reducer;
