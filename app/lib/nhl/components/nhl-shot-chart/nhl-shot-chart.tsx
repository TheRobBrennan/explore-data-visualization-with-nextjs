export interface NHLShotChartProps {
  shots: NHLShot[]
}

export interface NHLShot {
  x: number
  y: number
}

export default function NHLShotChart({ shots }: NHLShotChartProps) {
  if (!shots || shots.length === 0) return null

  return (
    <>
      <h1>NHL Data Visualization</h1>
      <pre>
        {JSON.stringify(shots)}
      </pre>
    </>
  );
}
