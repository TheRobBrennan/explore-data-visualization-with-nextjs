'use client'
import Header from '../../components/header'

const PAGE_TITLE = "[TEST] Next.js v13 migration"

export default function TestMigrationPage() {
  return (
    <>
      <Header />
      <h1>{PAGE_TITLE}</h1>
      <p>
        It's time to begin transitioning from{" "}
        <a href="https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration#migrating-from-pages-to-app" target="_blank">
          Next.js pages to the app router
        </a> as time permits.
      </p>
      <p>
        Click <a href="/">here</a> to return back to the main page.
      </p>
    </>
  )
}
