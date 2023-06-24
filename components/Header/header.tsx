import Link from "next/link"
import styles from "./header.module.css"
import { getServerSession } from "next-auth"
import SignInButton from "../SignInButton/SignInButton"
import SignOutButton from "../SignOutButton/SignOutButton"

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default async function Header() {
  const session = await getServerSession()

  return (
    <header>
      <div className={styles.signedInStatus}>
        <p>
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
            </>
          )}
        </p>
      </div>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            {!session && (
              <SignInButton />
            )}
            {session?.user?.image && (
              <SignOutButton />
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}
