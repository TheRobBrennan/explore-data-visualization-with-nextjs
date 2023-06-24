import Header from '../../components/Header/header'
import APIComparison from '../components/api-comparison/api-comparison'

const PAGE_TITLE = "Data Visualization with Next.js & Charts.js"

export default function NHLAPIPerformance() {
  return (
    <>
      {/* @ts-expect-error Async Server Component - https://nextjs.org/docs/app/building-your-application/configuring/typescript#async-server-component-typescript-error */}
      <Header />
      <h1>{PAGE_TITLE}</h1>
      <APIComparison />
    </>
  )
}
