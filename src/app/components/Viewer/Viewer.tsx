'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { IFetchSong } from '@/types/interface';
import { getDateFormatted } from '@/utils/format-date';
import Songs from '../Songs/Songs';
import ButtonDownload from '../Button/ButtonDownload';

export default function Viewer(props: { userData: Array<IFetchSong> }) {
  const date = getDateFormatted();
  const refSectionToImage = useRef() as React.MutableRefObject<HTMLElement>;

  return (
    <main className="flex flex-col py-10 px-6 h-auto md:mx-auto md:w-6/12 lg:w-4/12">
      <section
        className="flex flex-col items-center justify-center py-8 px-6 h-auto bg-c_black"
        ref={refSectionToImage}
      >
        <p className="font-light text-white self-end text-md pb-6">{date}</p>

        <h1 className="text-5xl text-white text-center font-black lg:text-6xl">
          MY TOP 5
        </h1>

        <Songs userData={props.userData} />

        <span className="text-sm text-center text-white">
          discover your top five <br />{' '}
          <b className="text-base">my-top-five.vercel.app</b>
        </span>

        <Image
          src="/spotify-logo.png"
          width={70}
          height={20}
          alt="Spotify logo"
          className="mt-2"
        />
      </section>

      <ButtonDownload refHtmlToImage={refSectionToImage} />
    </main>
  );
}
