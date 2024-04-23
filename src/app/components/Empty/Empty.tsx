import Image from "next/image"

const Empty = () => {
    return(
        <section className="bg-c_black flex flex-col items-center py-14 px-6 justify-center gap-10">
            <Image src='title-error.svg' width={319} height={10} alt="title writting MY TOP FIVE" className="sm:max-w-full" />

            <Image src='illustration-white-version.svg' width={249} height={246} alt="title writting MY TOP FIVE" className="sm:max-w-full" />

            <p className="text-2xl text-c_white font-medium text-center">Your top five from this last month is empty</p>
        </section>
    )
}

export default Empty;