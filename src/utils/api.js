// api = 20809970c71d431daeefcb4724eba35a

// base url

const BASE_URL = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&`;
// "https://api.rawg.io/api/";

//GETTING THE DATE
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDay();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// CURRENT DATE/MONTH/YEAR
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_MONTH = getCurrentMonth();
const CURRENT_DAY = getCurrentDay();

const CURRENT_DATE = `${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DAY}`;
const LAST_YEAR = `${CURRENT_YEAR - 1}-${CURRENT_MONTH}-${CURRENT_DAY}`;
const NEXT_YEAR = `${CURRENT_YEAR + 1}-${CURRENT_MONTH}-${CURRENT_DAY}`;

// POPULAR GAMES
const POPULAR_GAMES = `?dates=${LAST_YEAR},${CURRENT_DATE}&ordering=-rating&page_size=10`;
const UPCOMING_GAMES = `?dates=${CURRENT_DATE},${NEXT_YEAR}&ordering=-added&page_size=10`;
const NEW_GAMES = `?dates=${LAST_YEAR},${CURRENT_DATE}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${BASE_URL}${POPULAR_GAMES}`;
export const upcomingGamesURL = () => `${BASE_URL}${UPCOMING_GAMES}`;
export const newGamesURL = () => `${BASE_URL}${NEW_GAMES}`;

// GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `https://api.rawg.io/api/games/${game_id}`;

// GAME SCREENSHOTS
export const gameScreenshotURL = (game_id) =>
  `https://api.rawg.io/api/games/${game_id}/screenshots`;

// SEARCHED GAMES
export const searchGameURL = (game_name) =>
  `https://api.rawg.io/api/games?search=${game_name}&page_size=9`;
