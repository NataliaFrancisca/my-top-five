import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { fetchUserToken } from "@/service/token";
import { getTopTrack } from "@/service/top-track";

import Image from "next/image";
import Empty from "../components/Empty/Empty";
import Songs from "../components/Songs/Songs";
import ButtonDownload from "../components/Button/ButtonDownload";

export default async function Page(){
    const session = await getServerSession();
    const token = await fetchUserToken();

    if(!session || !token){
        redirect('/');
    }

    const onFetchUserData = getTopTrack(token);
    const userdata = await onFetchUserData();
    
    if(userdata.items.length == 0){
        return <Empty />
    }

    return(
        <main className="py-10 px-6 flex flex-col md:mx-auto md:w-6/12 lg:w-4/12">
            <section className="bg-c_black flex flex-col items-center py-8 px-2 justify-center">
                <Image src='title-h.svg' width={319} height={10} alt="title writting MY TOP FIVE" className="sm:max-w-full" />

                <Songs userData={userdata.items} />

                <span className="text-center text-sm text-c_white">discover your top five <br /> <b className="text-base">my-top-five.vercel.app</b></span>

                <Image src="/spotify-logo.png" width={70} height={20} alt="Spotify logo" className="mt-2"/>
            </section>
           
            <ButtonDownload />
        </main>
    )
}
