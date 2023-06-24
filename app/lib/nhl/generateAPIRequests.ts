import { NHL_LIVE_GAME_URL, NHL_SCHEDULE_URL } from "./constants";
import { APIRequest } from "../../components/api-comparison/api-comparison";

export const generateAPIRequests = (): APIRequest[] => {
  return [
    { endpoint: NHL_LIVE_GAME_URL, shortName: "NHL Live Game URL" },
    { endpoint: NHL_SCHEDULE_URL, shortName: "NHL Schedule URL" }
  ];
};
