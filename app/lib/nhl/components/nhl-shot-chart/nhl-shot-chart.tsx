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
      {shots.map((shot, index) => (
        <div key={index}>
          <p>X:{shot.x}, Y:{shot.y}</p>
        </div>
      ))}
      <pre>
        {JSON.stringify(shots)}
      </pre>
    </>
  );
}
