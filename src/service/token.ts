import { headers } from "next/headers";

export async function fetchUserToken(){
    const URL_FETCH = process.env.NEXTAUTH_URL as string;

    console.log("URL FETCH", `${URL_FETCH}/api/token`);
    
    try{
        const response = await fetch(`${URL_FETCH}/api/token`, {
            method: "GET",
            headers: headers(),
        });

        const data = await response.json();
        return data.accessToken;
    }catch(error){
        console.error(error);
    }
}