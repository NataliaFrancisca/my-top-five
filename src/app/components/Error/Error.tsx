'use client'
import Image from "next/image"
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

const Error = () => {

    const router = useRouter();
    const onNavigation = () => router.push('/');
    
    return(
        <section className="bg-c_black flex flex-col items-center py-8 px-10 justify-center h-dvh gap-10 my-10 mx-6 md:w-6/12 lg:w-4/12 lg:mx-auto">
            <Image src='title-error.svg' width={319} height={10} alt="title writting MY TOP FIVE" className="sm:max-w-full" />
            <Image src='illustration-white-version.svg' width={249} height={246} alt="title writting MY TOP FIVE" className="sm:max-w-full" />

            <p className="text-center text-medium text-2xl text-c_white">Oops! Couldn`t fetch the data right now. Mind giving it another shot later?</p>

            <Button message="TRY LOGIN AGAIN" style="w-11/12 self-center bg-c_white" buttonEvent={() => onNavigation()}/>
        </section>
    )
}

export default Error;