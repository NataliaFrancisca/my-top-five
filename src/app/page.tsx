import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import ButtonLogin from './components/Button/ButtonLogin';

export default async function Home() {
  const session = await getServerSession();

  if (session) {
    redirect('/view');
  }

  return (
    <main className="h-dvh flex justify-center items-center bg-c_white bg-home_pattern bg-center bg-repeat">
      <section className="flex flex-col justify-around rounded bg-primary px-6 py-16 min-h-3/6 w-10/12 gap-8 md:w-6/12 md:px-16">
        <h1 className="text-6xl text-start text-c_black font-black leading-[4.2rem]">
          MY TOP <br />
          <span className="underline">FIVE</span>
        </h1>

        <p className="text-2xl text-c_black text-start font-normal">
          Discover your top 5 currently most listened-to songs
        </p>

        <ButtonLogin />
      </section>
    </main>
  );
}
