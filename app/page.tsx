'use client'
import Header from '../components/header'

import HockeyRinkOverlay from '../components/HockeyRinkOverlay/HockeyRinkOverlay'

const PAGE_TITLE = "Welcome to Next.js v13"

export default function DefaultPage() {
  const shotData = [
    { type: 'shot', x: 20, y: 20 },
    { type: 'shot', x: -12, y: -23 },
    { type: 'shot', x: 2, y: 42 },
    { type: 'shot', x: -87, y: -15 },
  ]

  return (
    <>
      <Header />
      <h1>{PAGE_TITLE}</h1>
      <p>
        Stay tuned for data visualization examples.
      </p>
      <HockeyRinkOverlay shotData={shotData} />
    </>
  )
}
