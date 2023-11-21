import Image from "next/image";
import logo from "@/public/estatesshots-logo.png";
import connect from "@/public/connect.png";
import Book from "./components/Book";

export default function Home() {
  return (
    <main className=" w-full  text-[#1F1F1F]">
      <section className="flex flex-col items-center min-h-screen px-4 pt-10">
        <span className="md:my-8 my-6 text-center uppercase md:text-xl text-lg tracking-wider">
          los angeles
        </span>
        <h1 className="mx-auto font-dellaRespira tracking-wider text-center uppercase text-4xl md:text-[2.9rem] md:leading-none md:line-h lg:text-7xl ">
          real estate <br />
          photography <br />& videography
        </h1>
        <Image
          src={logo}
          className="mx-auto -translate-y-5 md:-translate-y-6 lg:-translate-y-10  lg:max-w-lg md:max-w-sm max-w-xs "
          alt="logo estate shots"
        ></Image>
        <p className="text-center max-w-sm md:max-w-md md:text-xl text-lg">
          Dedicated to showcasing every property in its best setting. Estate
          Shotes combines technical expertise with an artistic eye to bring out
          the unique beauty and character of each space.
        </p>
      </section>

      {/* <section className="flex flex-col items-center mt-10 min-h-screen">
        <span className="md:my-8 my-6 text-center uppercase md:text-xl text-lg tracking-wider">
          get in touch
        </span>

        <h1 className="mx-auto font-dellaRespira tracking-wider text-center uppercase text-4xl md:text-6xl lg:text-7xl ">
          let&apos;s work <br /> together
        </h1>
        <Image
          src={connect}
          className=" -translate-y-6 md:-translate-y-7 lg:-translate-y-10 lg:h-[202px] md:h-[151px] h-[126px] object-contain"
          alt="logo estate shots"
          quality={100}
        ></Image>

        <p className="text-center max-w-sm md:max-w-md md:text-xl text-lg">
          We would love to help you
        </p>
      </section> */}
    </main>
  );
}
