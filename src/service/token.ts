import { headers } from "next/headers";

export async function fetchUserToken(){
    try{
        const response = await fetch("http://localhost:3000/api/token", {
            method: "GET",
            headers: headers(),
        });

        const data = await response.json();
        return data.accessToken;
    }catch(error){
        console.error(error);
    }
}