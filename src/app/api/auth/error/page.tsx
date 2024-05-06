'use client'
import Image from "next/image"
import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";

const Error = () => {
    
    const router = useRouter();
    
    return(
        <section className="bg-c_black flex flex-col items-center py-8 px-10 justify-center h-dvh gap-10 my-10 mx-6 md:w-6/12 lg:w-4/12 lg:mx-auto">
            <h1 className="text-6xl font-black text-primary text-center md:text-5xl">ERROR</h1>

            <Image src='../../../illustration-white-version.svg' width={249} height={246} alt="title writting MY TOP FIVE" className="sm:max-w-full" priority />

            <p className="text-center font-semibold text-2xl text-c_white">Oops! Couldn`t connect with your account right now. Mind giving it another shot later?</p>

            <Button message="TRY LOGIN AGAIN" style="w-11/12 self-center bg-c_white hover:text-black" buttonEvent={() => router.push('/')}/>
        </section>
    )
}

export default Error;