'use client';
import Image from "next/image";
import Button from "./components/Button/Button";
import { signIn } from "next-auth/react";

export default function Home() {

  const onLoginWithSpotify = () => {
    signIn('spotify', { callbackUrl: '/view'})
  }

  return (
    <main className="h-dvh flex flex-col gap-2.5 py-10 bg-primary justify-between px-11" >

      <section className="h-full w-full flex flex-col md:w-4/12 md:mx-auto justify-between">
        <h1 className="text-6xl font-black text-c_black text-start leading-[4.2rem]">
          MY TOP <br />
          <span className="text-[#D5FFCA] underline">FIVE</span> 
        </h1>

        <Image 
          src='illustration.svg'
          width={390}
          height={390}
          className="md:mx-auto md:w-8/12"
          alt="an animated boy listening music using headphones"
        />

        <Button message="TRY WITH SPOTIFY" style="bg-c_black text-c_white text-xl" buttonEvent={() => onLoginWithSpotify()}/>
      </section>
       
    </main>
  );
}
