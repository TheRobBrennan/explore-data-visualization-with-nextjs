'use client'
import Header from '../components/header'

const PAGE_TITLE = "Welcome to Next.js v13"

export default function TestMigrationPage() {
  return (
    <>
      <Header />
      <h1>{PAGE_TITLE}</h1>
      <p>
        Stay tuned for data visualization examples.
      </p>
    </>
  )
}
