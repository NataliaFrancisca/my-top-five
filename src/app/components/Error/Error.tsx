'use client';
import Image from 'next/image';
import Button from '../Button/Button';
import { useRouter } from 'next/navigation';
import { ErrorType } from '@/types/enum';

const Error = (error: { type: ErrorType }) => {
  const router = useRouter();

  return (
    <main className="flex flex-col py-10 px-6 md:mx-auto md:w-6/12 lg:w-4/12 min-h-dvh">
      <section className="bg-c_black flex flex-col items-center py-8 px-10 justify-center h-full gap-10">
        <h1 className="text-6xl font-black text-white text-center md:text-5xl">
          {error.type === ErrorType.empty ? 'SORRY' : 'ERROR'}
        </h1>

        <Image
          src="illustration-white-version.svg"
          width={249}
          height={246}
          alt="title writting MY TOP FIVE"
          className="sm:max-w-full"
        />

        {error.type === ErrorType.empty ? (
          <article className="flex flex-col gap-1">
            <p className="text-center font-semibold text-2xl text-white">
              Your top five from last month is empty :/
            </p>
            <span className="italic text-center text-base font-medium text-white">
              try listening some music today
            </span>
          </article>
        ) : (
          <p className="text-center font-semibold text-2xl text-white">
            Oops! Couldn`t fetch the data right now. Mind giving it another shot
            later?
          </p>
        )}

        {error.type === ErrorType.error && (
          <Button
            message="Try login again"
            style="w-11/12 self-center bg-white hover:text-black"
            event={() => router.push('/')}
          />
        )}
      </section>
    </main>
  );
};

export default Error;
