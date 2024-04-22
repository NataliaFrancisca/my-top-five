import { refreshAccessToken } from "@/utils/refreshToken";
import NextAuth from "next-auth/next";
import Spotify from "next-auth/providers/spotify";

const scope = 'user-read-private user-read-email user-top-read';

const handler = NextAuth({
    providers: [
        Spotify({
            clientId: process.env.CLIENT_ID as string,
            clientSecret: process.env.CLIENT_SECRET as string,
            authorization: `https://accounts.spotify.com/authorize?scope=${scope}`,
            token: {url: 'https://accounts.spotify.com/api/token', params: {grant_type: 'authorization_code'}}
        })
    ],

    jwt: {
        maxAge: 60 * 60
    },
  
    session: {
        strategy: 'jwt',
    },
  
    callbacks: {
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            return session;
        },

        async jwt({token, account}){
            if (account) {
            token.accessToken = account.access_token
            token.refreshToken = account.refresh_token
            return token;
            }

            if(token.accessTokenExpires && Date.now() < token.accessTokenExpires){
            console.log("ACHO QUE O TOKEN AINDA NÃO ESTÁ EXPIRADO");
            return token;
            }

            const newToken = await refreshAccessToken(token);
            console.log('UM NOVO TOKEN FOI GERADO :)');
            return newToken;
        }
    }
})

export { handler as GET, handler as POST }