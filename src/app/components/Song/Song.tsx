import { IFetchSong } from "@/types/interface";
import Image from "next/image"

const Song = (props: {song: IFetchSong}) => {

    const { album, artists, name, external_urls } = props.song;

    return(
        <article className="flex w-full gap-2 ">
            <Image src={album.images[0].url} width={92} height={86} alt="album cover" />

            <div className="flex flex-col justify-center text-c_white overflow-hidden whitespace-nowrap">
                <a className="font-bold text-xl no-underline inline-block truncate" href={external_urls.spotify} target="_blank">{name}</a>

                { artists.length < 2 ? artists.map((artist, key) => (
                        <p key={key} className="font-medium text-lg">{artist.name}</p>
                    )) : <p className="font-medium text-lg">{artists[0].name} & {artists.length - 1} more</p>
                }
            </div>
        </article>
    )
}

export default Song;