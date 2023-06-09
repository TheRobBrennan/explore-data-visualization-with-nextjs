import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    async jwt({ token }) {
      // Use this to add custom properties
      // token.userRole = "admin"
      return token
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }