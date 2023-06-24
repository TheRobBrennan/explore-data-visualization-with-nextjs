import Header from './components/Header/header'
import APIComparison from './components/api-comparison/api-comparison'
import ExampleBarChart from './components/ExampleBarChart/ExampleBarChart'
import ExampleScatterPlot from './components/ExampleScatterPlot/ExampleScatterPlot'
import ExampleRadarChart from './components/ExampleRadarChart/ExampleRadarChart'

import { generateAPIRequests } from './lib/nhl'

export default function DefaultPage() {
  const exampleEndpoints = generateAPIRequests()

  return (
    <>
      {/* @ts-expect-error Async Server Component - https://nextjs.org/docs/app/building-your-application/configuring/typescript#async-server-component-typescript-error */}
      <Header />

      <h1>NHL API Performance</h1>
      <APIComparison apiRequests={exampleEndpoints} />

      <h1>Data Visualization with Next.js & Charts.js</h1>
      <ExampleBarChart />
      <ExampleScatterPlot />
      <ExampleRadarChart />
    </>
  )
}
