'use client'
import Header from '../components/Header/header'
import ExampleBarChart from '../components/ExampleBarChart/ExampleBarChart'
import ExampleScatterPlot from '../components/ExampleScatterPlot/ExampleScatterPlot'

const PAGE_TITLE = "Welcome to Next.js v13"

export default function DefaultPage() {
  return (
    <>
      <Header />
      <h1>{PAGE_TITLE}</h1>
      <p>
        Stay tuned for data visualization examples.
      </p>
      <ExampleBarChart />
      <ExampleScatterPlot />
    </>
  )
}
