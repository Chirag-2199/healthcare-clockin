import NextAuth, { Session } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

declare module 'next-auth' {
    interface Session {
        accessToken?: string;
    }
}

const handler = NextAuth({
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID!,
            clientSecret: process.env.AUTH0_CLIENT_SECRET!,
            issuer: process.env.AUTH0_ISSUER!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken as string | undefined;
            return session;
        },
    },
});

export { handler as GET, handler as POST };
