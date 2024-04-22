import axios from "axios";
import { JWT } from "next-auth/jwt";

const CLIENT_ID =  process.env.CLIENT_ID as string;
const CLIENT_SECRET =  process.env.CLIENT_SECRET as string;

export async function refreshAccessToken(token: JWT): Promise<JWT> {
    
    try {
      const basicAuth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
        'base64'
      )
      const { data } = await axios.post(
        "https://accounts.spotify.com/api/token",
        {
          grant_type: 'refresh_token',
          refresh_token: token.refreshToken,
        },
        {
          headers: {
            Authorization: `Basic ${basicAuth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      return {
        ...token,
        accessToken: data.access_token,
        accessTokenExpires: Date.now() + data.expires_in * 1000,
      }
    } catch (error) {
      return {
        ...token,
        error: 'RefreshAccessTokenError',
      }
    }
  }