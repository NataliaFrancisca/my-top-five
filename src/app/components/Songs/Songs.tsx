import { IFetchSong } from "@/types/interface";
import Song from "../Song/Song"

const Songs = (props: {userData: Array<IFetchSong>}) => {

    return(
        <section className="w-11/12 flex flex-col mt-12 mb-10 gap-3">
            {props.userData.map((song, key) => (
                <Song song={song} key={key}/>
            ))}
        </section>
    )
}

export default Songs;