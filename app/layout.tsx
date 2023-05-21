// The root layout replaces the pages/_app.tsx and pages/_document.tsx files
import "../styles/styles.css"
import { Metadata } from 'next';
import { Session } from 'next-auth'
import { headers } from 'next/headers'
import AuthContext from '../contexts/authentication/AuthContext'

export const metadata: Metadata = {
  title: '[DEMO] Next.js v13 with next-auth',
  description: 'Welcome to Next.js v13 with next-auth',
}
async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const session = await getSession(headers().get('cookie') ?? '');
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <AuthContext session={session}>
          {children}
        </AuthContext>
      </body>
    </html>
  )
}