'use client';
import { useRef } from "react";
import { IFetchSong } from "@/types/interface";

import Image from "next/image";
import Songs from "../Songs/Songs";

import Empty from "../Empty/Empty";
import ButtonDownload from "../Button/ButtonDownload";

export default function Viewer(props: {userData: Array<IFetchSong>}){

    const ref = useRef() as React.MutableRefObject<HTMLElement>;

    if(props.userData.length === 0){
        return <Empty />
    }

    return(
        <main className="py-10 px-6 flex flex-col md:mx-auto md:w-6/12 lg:w-4/12">
            <section className="bg-c_black flex flex-col items-center py-8 px-2 justify-center" ref={ref}>
                <Image src='title-h.svg' width={319} height={10} alt="title writting MY TOP FIVE" className="sm:max-w-full" />

                <Songs userData={props.userData} />

                <span className="text-center text-sm text-c_white">discover your top five <br /> <b className="text-base">my-top-five.vercel.app</b></span>
                
                <Image src="/spotify-logo.png" width={70} height={20} alt="Spotify logo" className="mt-2"/>
             </section>

            <ButtonDownload refHtmlToImage={ref}/>
        </main>
    )
}