import Image from "next/image"

const Empty = () => {
    return(
        <section className="bg-c_black flex flex-col items-center py-8 px-10 justify-center h-dvh gap-10 my-10 mx-6 md:w-6/12 lg:w-4/12 lg:m-auto">
            <Image src='title-error.svg' width={319} height={10} alt="title writting MY TOP FIVE" className="sm:max-w-full" />
            <Image src='illustration-white-version.svg' width={249} height={246} alt="title writting MY TOP FIVE" className="sm:max-w-full" />

            <p className="text-center text-medium text-2xl text-c_white">Your top five from last month is empty</p>
        </section>
    )
}

export default Empty;