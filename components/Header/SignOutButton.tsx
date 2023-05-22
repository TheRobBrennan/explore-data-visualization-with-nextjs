"use client"
import { signOut } from "next-auth/react"

export default function SignOutButton() {
  return <a
    href={`/api/auth/signout`}
    onClick={(e) => {
      e.preventDefault()
      signOut()
    }}
  >
    Sign out
  </a>
}
