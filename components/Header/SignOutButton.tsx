"use client"
import { signOut } from "next-auth/react"
import styles from "./header.module.css"

export default function SignOutButton() {
  return <a
    href={`/api/auth/signout`}
    className={styles.button}
    onClick={(e) => {
      e.preventDefault()
      signOut()
    }}
  >
    Sign out
  </a>
}
