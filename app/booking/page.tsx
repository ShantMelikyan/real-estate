import React from "react";
import Image from "next/image";
import thankyou from "@/public/thankyou.png";

const Confirmation = () => {
  return (
    <div className="font-raleway w-full bg-[#F5F5F3] text-[#1F1F1F]">
      <section className="flex flex-col items-center min-h-screen mx-4 pt-10">
        <span className="md:my-8 my-6 text-center uppercase md:text-xl text-lg tracking-wider">
          Congratulations
        </span>

        <div className="w-full relative pb-28 md:pb-32 lg:pb-40">
          <h1 className="mx-auto font-dellaRespira tracking-wider text-center uppercase text-4xl md:text-6xl lg:text-7xl ">
            our meeting <br />
            was scheduled <br />
            successfully
          </h1>
          <Image
            src={thankyou}
            className="left-1/2 absolute -translate-y-5 md:-translate-y-6 lg:-translate-y-10 -translate-x-1/2 lg:h-[202px] md:h-[151px] h-[126px] object-contain"
            alt="logo estate shots"
            quality={100}
          ></Image>
        </div>

        <p className="text-center max-w-sm md:max-w-md md:text-xl text-lg">
          Thank you for choosing Estate Shots. We look forward to capturing the
          beauty of your property! Once we approve the event we will send you an
          email with a calendar invitation with the details of our meeting.
        </p>
        <p className="text-center max-w-sm md:max-w-md pt-10">
          If you have any questions or need to make changes to your booking,
          please contact us at:
        </p>
        <div className="space-x-5">
          <a
            href="mailto:help@esateshots.com"
            className="text-[#C29C5B] font-dellaRespira"
          >
            help@esateshots.com
          </a>
          <a
            href="tel:+1(818)359 6824"
            className="text-[#C29C5B] font-dellaRespira"
          >
            +1 818 359 6824
          </a>
        </div>
        {/* <h2>Turning Every Property into a Visual Masterpiece.</h2> */}
      </section>
    </div>
  );
};

export default Confirmation;
