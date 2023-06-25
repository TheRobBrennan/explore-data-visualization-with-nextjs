import type { NHLShot } from "./components/nhl-shot-chart/nhl-shot-chart";

export const generateShots = (): NHLShot[] => {
  return [{ coordinates: { x: - 90, y: 23 } }, { coordinates: { x: 12, y: 34 } }, { coordinates: { x: -22, y: -3 } }, { coordinates: { x: 86, y: -23 } }, { coordinates: { x: 0, y: 0 } }];
};
