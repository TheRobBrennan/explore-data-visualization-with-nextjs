import Link from "next/link"
import styles from "./header.module.css"
import { getServerSession } from "next-auth"
import SignInButton from "./SignInButton"
import SignOutButton from "./SignOutButton"

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default async function Header() {
  const session = await getServerSession()

  return (
    <header>
      <div className={styles.signedInStatus}>
        <p>
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <SignInButton />
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <SignOutButton />
            </>
          )}
        </p>
      </div>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          {/* <li className={styles.navItem}>
            <Link href="/client">Client</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/server">Server</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/protected">Protected</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/api-example">API</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/admin">Admin</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/me">Me</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/test">Next.js App Router Migration</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}
