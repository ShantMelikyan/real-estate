import Image from "next/image";
import logo from "@/public/logo-new-screen.png";
import connect from "@/public/connect.png";

import Book from "./components/Book";
export default function Home() {
  return (
    <main className="font-raleway w-full bg-[#F5F5F3] text-[#1F1F1F]">
      <section className="flex flex-col items-center min-h-screen px-4 pt-10">
        <span className="md:my-8 my-6 text-center uppercase md:text-xl text-lg tracking-wider">
          los angeles
        </span>

        <div className="w-full relative pb-28 md:pb-32 lg:pb-40">
          <h1 className="mx-auto font-dellaRespira tracking-wider text-center uppercase text-4xl md:text-[2.9rem] md:leading-none md:line-h lg:text-7xl ">
            real estate <br />
            photography <br />& videography
          </h1>
          <Image
            src={logo}
            className="left-1/2 absolute -translate-y-5 md:-translate-y-6 lg:-translate-y-10 -translate-x-1/2 lg:max-w-lg md:max-w-sm max-w-xs "
            alt="logo estate shots"
            quality={100}
          ></Image>
        </div>

        <p className="text-center max-w-sm md:max-w-md md:text-xl text-lg">
          Dedicated to showcasing every property in its best setting. Estate
          Shotes combines technical expertise with an artistic eye to bring out
          the unique beauty and character of each space.
        </p>
        {/* <h2>Turning Every Property into a Visual Masterpiece.</h2> */}
      </section>

      <section className="flex flex-col items-center mt-10 min-h-screen">
        <span className="md:my-8 my-6 text-center uppercase md:text-xl text-lg tracking-wider">
          get in touch
        </span>

        <div className="w-full relative pb-28 md:pb-32 lg:pb-40">
          <h1 className="mx-auto font-dellaRespira tracking-wider text-center uppercase text-4xl md:text-6xl lg:text-7xl ">
            let's work <br /> together
          </h1>
          <Image
            src={connect}
            className="left-1/2 absolute -translate-y-6 md:-translate-y-7 lg:-translate-y-10 -translate-x-1/2 lg:h-[202px] md:h-[151px] h-[126px] object-contain"
            alt="logo estate shots"
            quality={100}
          ></Image>
        </div>

        <p className="text-center max-w-sm md:max-w-md md:text-xl text-lg">
          We would love to help you
        </p>
        {/* <h2>Turning Every Property into a Visual Masterpiece.</h2> */}
      </section>
      <Book />
    </main>
  );
}
