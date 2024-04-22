import Image from "next/image";
import Songs from "../Songs/Songs";

const Viewer = () => {
    return(
        <section className="bg-c_black flex flex-col items-center py-8 px-2 justify-center">
            
            <Image src='title-h.svg' width={319} height={10} alt="title writting MY TOP FIVE" className="max-w-screen-sm" />

            <Songs />

            <span className="text-center text-sm text-c_white">discover your top five <br /> <b className="text-base">my-top-five.vercel.app</b></span>
            
            <Image src="/spotify-logo.png" width={70} height={20} alt="Spotify logo" className="mt-2"/>
            
        </section>
    )
}

export default Viewer;