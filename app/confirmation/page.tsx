import React from "react";
import Image from "next/image";
import thankyou from "@/public/thankyou.png";

const Confirmation = () => {
  return (
    <div className="font-raleway w-full bg-[#F5F5F3] text-[#1F1F1F]">
      <section className="flex flex-col items-center min-h-screen mx-4 pt-10">
        <span className="md:my-8 my-6 text-center uppercase tracking-wider">
          Will confirm shortly
        </span>
        <h1 className="mx-auto font-dellaRespira tracking-wider text-center uppercase text-4xl md:text-6xl lg:text-7xl ">
          Booking was
          <br />
          successfully <br />
          submitted
        </h1>
        <Image
          src={thankyou}
          className="-translate-y-5 md:-translate-y-6 lg:-translate-y-10 lg:h-[202px] md:h-[151px] h-[126px] object-contain"
          alt="logo estate shots"
          quality={100}
        ></Image>
        <p className="text-center max-w-sm md:max-w-md md:text-xl text-lg">
          Thank you for choosing Estate Shots. We look forward to capturing the
          beauty of the property! We will be in touch soon to confirm the
          details of your session.
        </p>
        <p className="text-center max-w-sm md:max-w-md pt-10">
          If you have any questions or need to make changes to your booking,
          please contact us at:
        </p>
        <div className="space-x-5 mt-4">
          <a
            href="mailto:help@esatesshots.com"
            className="text-[#C29C5B] font-dellaRespira"
          >
            help@esatesshots.com
          </a>
          <a
            href="tel:+1(818)359 6824"
            className="text-[#C29C5B] font-dellaRespira"
          >
            call
          </a>
        </div>
        {/* <h2>Turning Every Property into a Visual Masterpiece.</h2> */}
      </section>
    </div>
  );
};

export default Confirmation;
