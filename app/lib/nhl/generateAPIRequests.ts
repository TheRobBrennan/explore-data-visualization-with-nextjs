import { NHL_LIVE_GAME_URL, NHL_SCHEDULE_URL } from "./constants";


export const generateAPIRequests = () => {
  return [
    { endpoint: NHL_LIVE_GAME_URL, shortName: "NHL Live Game URL" },
    { endpoint: NHL_SCHEDULE_URL, shortName: "NHL Schedule URL" }
  ];
};
