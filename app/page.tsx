import Header from '../components/Header/header'
import ExampleBarChart from '../components/ExampleBarChart/ExampleBarChart'
import ExampleScatterPlot from '../components/ExampleScatterPlot/ExampleScatterPlot'
import ExampleRadarChart from '../components/ExampleRadarChart/ExampleRadarChart'
import Footer from '../components/Footer/footer'

const PAGE_TITLE = "Welcome to Next.js v13"

export default function DefaultPage() {
  return (
    <>
      {/* Expected error - Async Server Component - https://nextjs.org/docs/app/building-your-application/configuring/typescript#async-server-component-typescript-error */}
      {/* @ts-ignore */}
      <Header />
      <h1>{PAGE_TITLE}</h1>
      <p>
        Stay tuned for data visualization examples.
      </p>
      <ExampleBarChart />
      <ExampleScatterPlot />
      <ExampleRadarChart />
      <Footer />
    </>
  )
}
