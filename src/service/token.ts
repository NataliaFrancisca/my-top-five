import { headers } from "next/headers";

export async function fetchUserToken(){
    const DYNAMIC_URL = process.env.NEXTAUTH_URL;

    try{
        const response = await fetch(`${DYNAMIC_URL}/api/token`, {
            method: "GET",
            headers: headers(),
        });

        const data = await response.json();
        return data.accessToken;
    }catch(error){
        console.error(error);
    }
}