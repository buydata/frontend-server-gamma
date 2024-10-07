import NextAuth from "next-auth"
import Keycloak from "next-auth/providers/keycloak"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Keycloak],
	callbacks: {
    // jwt: async ({ account, token }) => {
    //   console.log("[jwt] account: ", account)
    //   if (account) {
    //     return { ...token, sub: account.providerAccountId, exp: account.expires_at }
    //   }
    //   return token
    // },
    async jwt({ token, account }) {
      if (account) {
        console.log("[ACCOUNT] ACCOUNT: ", account)
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
        token.sub = account.providerAccountId;
        token.exp = account.expires_at;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken
      session.user.id = token.sub!;
      session.expires = token.exp;
      console.log("[SESSION] SESSION: ", session)
      return session;
    }
  }
})