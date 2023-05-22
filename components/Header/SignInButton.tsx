"use client"
import { signIn } from "next-auth/react"
import styles from "./header.module.css"

export default function SignInButton() {
  return <a
    href={`/api/auth/signin`}
    className={styles.button}
    onClick={(e) => {
      e.preventDefault()
      signIn()
    }}
  >
    Sign in
  </a>
}
