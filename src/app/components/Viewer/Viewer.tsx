import Image from "next/image";
import Songs from "../Songs/Songs";
import { fetchUserToken } from "@/service/token";
import { getTopTrack } from "@/service/top-track";

export default async function Viewer(){

    const usertoken = await fetchUserToken();

    const fetchAPI = getTopTrack(usertoken);
    const userdata = await fetchAPI();

    return(
        <section className="bg-c_black flex flex-col items-center py-8 px-2 justify-center">
            
            <Image src='title-h.svg' width={319} height={10} alt="title writting MY TOP FIVE" className="sm:max-w-full" />

            <Songs userData={userdata.items} />

            <span className="text-center text-sm text-c_white">discover your top five <br /> <b className="text-base">my-top-five.vercel.app</b></span>
            
            <Image src="/spotify-logo.png" width={70} height={20} alt="Spotify logo" className="mt-2"/>
            
        </section>
    )
}