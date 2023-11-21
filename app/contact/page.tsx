import React from "react";
import Image from "next/image";
import connect from "@/public/connect.png"

const Contact = () => {
  return (
    <div>
      <section className="flex flex-col items-center mt-10 min-h-screen">
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
      </section>
    </div>
  );
};

export default Contact;
