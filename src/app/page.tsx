'use client';
import Image from "next/image";
import Button from "./components/Button/Button";
import { signIn } from "next-auth/react";

export default function Home() {

  const onLoginWithSpotify = () => {
    signIn('spotify', { callbackUrl: '/view'})
  }

  return (
    <main className="h-dvh flex justify-center items-center gap-2.5 p-6" >
      
      <Image 
        src="title.svg" 
        width={84} 
        height={600}
        className="h-full flex"
        alt="image that have a duplicated phrase my top five written in green with a black background"
      />

      <section className="flex flex-col h-fit">
        <Image
          src="illustration.svg"
          width={258}
          height={481}
          className="h-full flex"
          alt="image that have a duplicated person listening music using headphones"
        />

        <Button message="TRY WITH SPOTIFY" style="w-11/12 self-center" buttonEvent={() => onLoginWithSpotify()}/>
      </section>
    </main>
  );
}
