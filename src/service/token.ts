import { headers } from "next/headers";

export async function fetchUserToken(){
    const DYNAMIC_URL = process.env.NEXTAUTH_URL;

    try{
        const response = await fetch(`${DYNAMIC_URL}/api/token`, {
            method: "GET",
            headers: new Headers(headers()),
        });

        return await response.json();
    }catch(error){
        console.error('error', error);
        return error;
    }
}