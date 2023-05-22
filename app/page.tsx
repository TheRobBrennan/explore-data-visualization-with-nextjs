import Header from '../components/Header/header'
import ExampleBarChart from '../components/ExampleBarChart/ExampleBarChart'
import ExampleScatterPlot from '../components/ExampleScatterPlot/ExampleScatterPlot'
import ExampleRadarChart from '../components/ExampleRadarChart/ExampleRadarChart'

const PAGE_TITLE = "Data Visualization with Next.js & Charts.js"

export default function DefaultPage() {
  return (
    <>
      {/* @ts-expect-error Async Server Component - https://nextjs.org/docs/app/building-your-application/configuring/typescript#async-server-component-typescript-error */}
      <Header />
      <h1>{PAGE_TITLE}</h1>
      <ExampleBarChart />
      <ExampleScatterPlot />
      <ExampleRadarChart />
    </>
  )
}
