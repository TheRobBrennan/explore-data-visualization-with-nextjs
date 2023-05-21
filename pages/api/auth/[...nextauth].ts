import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google"
// import FacebookProvider from "next-auth/providers/facebook"
// import TwitterProvider from "next-auth/providers/twitter"
// import Auth0Provider from "next-auth/providers/auth0"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    // Auth0Provider({
    //   clientId: process.env.AUTH0_ID,
    //   clientSecret: process.env.AUTH0_SECRET,
    //   issuer: process.env.AUTH0_ISSUER,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET,
    //   version: "2.0",
    // }),
  ],
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
    // async signIn({ user }) {
    //   // 2023.05.21 Reference code demonstrating a crude example of restricting GitHub auth to specific users
    //   console.log('User:\n' + JSON.stringify(user, null, 2));
    //   // let isAllowedToSignIn = true
    //   // const allowedUser = [
    //   //   'YOURGITHUBACCID',
    //   // ];
    //   // if (allowedUser.includes(String(user.id))) {
    //   //   isAllowedToSignIn = true
    //   // }
    //   // else {
    //   //   isAllowedToSignIn = false
    //   // }
    //   // return isAllowedToSignIn
    // }
  },
}

export default NextAuth(authOptions)
