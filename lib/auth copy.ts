import NextAuth from "next-auth"
import Keycloak from "next-auth/providers/keycloak"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Keycloak],
	callbacks: {
    jwt: async ({ account, token }) => {
      console.log("[jwt] account: ", account)
      if (account) {
        return { ...token, sub: account.providerAccountId, exp: account.expires_at }
      }
      return token
    },
    session({ session, token }) {
      console.log("[SESSION] token: ", token)
      session.user.id = token.sub!;
      return session
    }
  }
})