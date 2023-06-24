"use client"
import { signIn } from "next-auth/react"

export default function SignInButton() {
  return <a
    href={`/api/auth/signin`}
    onClick={(e) => {
      e.preventDefault()
      signIn()
    }}
  >
    Sign in
  </a>
}
