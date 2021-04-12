import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "redux/gameSlice";
import gameDetailReducer from 'redux/gameDetailSlice';

export default configureStore({
  reducer: {
    games: gameReducer,
    gameDetails: gameDetailReducer 
  },
});
