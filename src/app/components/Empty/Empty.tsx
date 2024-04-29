import Image from "next/image"

const Empty = () => {
    return(
        <section className="bg-c_black flex flex-col items-center py-8 px-10 justify-center h-dvh gap-10 my-10 mx-6 md:w-6/12 lg:w-4/12 lg:mx-auto">
            
            <h1 className="text-6xl font-black text-primary text-center md:text-5xl">ERROR</h1>

            <Image src='illustration-white-version.svg' width={249} height={246} alt="title writting MY TOP FIVE" className="sm:max-w-full" />

            <article className="flex flex-col gap-1">
                <p className="text-center font-semibold text-2xl text-c_white">Your top five from last month is empty :/</p>
                <span className="italic text-center text-base font-medium text-c_white">try listening some music today</span>
            </article>
          
        </section>
    )
}

export default Empty;