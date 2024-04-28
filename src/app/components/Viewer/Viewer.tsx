'use client';
import { useRef } from "react";
import { IFetchSong } from "@/types/interface";

import Image from "next/image";
import Songs from "../Songs/Songs";

import Empty from "../Empty/Empty";
import Error from "../Error/Error";
import ButtonDownload from "../Button/ButtonDownload";

export default function Viewer(props: {userData: Array<IFetchSong>}){

    const ref = useRef() as React.MutableRefObject<HTMLElement>;

    if(props.userData === undefined){
        return <Error />
    }

    if(props.userData.length === 0 || !props.userData){
        return <Empty />
    }

    return(
        <main className="py-10 px-6 flex flex-col h-auto md:mx-auto md:w-6/12 lg:w-4/12">

            <section className="bg-c_black flex flex-col items-center py-8 px-2 justify-center h-auto" ref={ref}>

                <h1 className="text-6xl font-black text-primary text-center md:text-5xl">MY TOP 5</h1>

                <Songs userData={props.userData} />

                <span className="text-center text-sm text-c_white">discover your top five <br /> <b className="text-base">my-top-five.vercel.app</b></span>
                
                <Image src="/spotify-logo.png" width={70} height={20} alt="Spotify logo" className="mt-2"/>
            </section>

            <ButtonDownload refHtmlToImage={ref}/>
        </main>
    )
}