import Header from '@/components/ui/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function page() {
  return (
    <>
      <Header />

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] flex justify-center mt-16">
        <div className=" md:max-w-4xl p-4 flex flex-col space-y-4 items-center">
          <h1 className="font-bold text-5xl md:text-8xl mt-10 text-center">
            Ignite the journey, drive the deal in seconds
          </h1>

          <p className="text-center">
            Turbo trader, Your ultimate pitstop for buying and selling thrills!!
          </p>

          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 w-[260px]">
            <Button asChild variant="outline">
              <Link href="/explore">Browsing</Link>
            </Button>
            <Button asChild>
              <Link href="/createpost">Selling</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
