export type HockeyRinkShotDetail = {
  type: string,
  x: number,
  y: number,
}

export type HockeyRinkShotData = {
  shotData: HockeyRinkShotDetail[]
}

export default function HockeyRinkOverlay({ shotData }: HockeyRinkShotData) {
  return (
    <div>
      <h2>HockeyRinkOverlay</h2>
      <pre>{JSON.stringify(shotData)}</pre>
    </div>
  );
};
