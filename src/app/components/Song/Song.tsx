import Image from "next/image"

const Song = () => {
    return(
        <article className="flex w-full gap-2">
            <Image src='/teste.png' width={92} height={86} alt="album cover" />

            <div className="flex flex-col justify-center text-c_white">
                <a className="font-bold text-xl no-underline" href="/">Chove Chuva</a>
                <p className="font-medium text-base">Big Bllakk & 4 more</p>
            </div>
        </article>
    )
}

export default Song;