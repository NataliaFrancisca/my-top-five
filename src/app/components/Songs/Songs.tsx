import Song from "../Song/Song"

const Songs = () => {
    return(
        <section className="w-10/12 flex flex-col mt-12 mb-10 gap-3">
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
        </section>
    )
}

export default Songs;