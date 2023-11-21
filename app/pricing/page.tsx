import React from "react";
import Image from "next/image";
import pricing from "@/public/pricing.png";
import Link from "next/link";
const page = () => {
  return (
    <main className="px-4">
      <section className="flex flex-col items-center pt-10">
        <span className="md:my-8 my-6 text-center uppercase  tracking-wider">
          Los angeles
        </span>

        <h1 className="mx-auto font-dellaRespira tracking-wider text-center uppercase text-4xl md:text-[2.9rem] md:leading-none md:line-h lg:text-7xl ">
          Affordable <br />
          Real Estate <br />
          Photography
        </h1>
        <Image
          src={pricing}
          className="mx-auto -translate-y-5 md:-translate-y-6 lg:-translate-y-10 lg:h-[202px] md:h-[151px] h-[126px] object-contain"
          alt="logo estate shots"
          quality={100}
        ></Image>

        <p className="text-center max-w-sm md:max-w-md md:text-xl text-lg">
          Explore our range of photography packages designed to meet your needs
          and budget. Offering quality, efficiency, and value for realtors and
          homeowners in Los Angeles.
        </p>
        <h2 className="text-center uppercase  mt-20 mb-10 font-dellaRespira text-xl font-semibold">
          {" "}
          Our packages
        </h2>
      </section>
      <section
        id="packages"
        className="flex flex-col md:flex-row justify-center px-4 gap-10"
      >
        <article>
          <h2 className="font-dellaRespira uppercase font-medium text-lg inline-block">
            Basic
          </h2>
          <p className="ml-4 inline text-xl ">$190</p>
          <ul className="list-disc list-inside mt-4 ">
            <li>15-20 pro edited HDR photos</li>
            <li>5 Arial Photos</li>
            <li>Marketing Kit</li>
            <li>Ideal for real estate up to 1,500 sq ft.</li>
          </ul>
        </article>

        <article>
          <h2 className="font-dellaRespira uppercase font-medium text-lg inline-block">
            Standard
          </h2>
          <p className="ml-4 inline text-xl ">$290</p>
          <ul className="list-disc list-inside mt-4 ">
            <li>25-35 pro edited HDR Photos</li>
            <li>7 Arial Photos</li>
            <li>3D Virtual Tour</li>
            <li>Marketing Kit</li>
            <li>Suitable for real estate up to 3,000 sq ft.</li>
          </ul>
        </article>

        <article>
          <h2 className="font-dellaRespira uppercase font-medium text-lg inline-block">
            Premium
          </h2>
          <p className="ml-4 inline text-xl ">$390</p>
          <ul className="list-disc list-inside mt-4 ">
            <li>40-50 pro edited HDR photos.</li>
            <li>10 Aerial drone photos </li>
            <li>Arial video tour</li>
            <li>3D virtual tour</li>
            <li>Marketing Kit</li>
            <li>Property website</li>
          </ul>
        </article>
      </section>

      <section
        id="add-ons"
        className="flex justify-center flex-col md:items-center mt-20 px-4"
      >
        <h2 className="font-dellaRespira uppercase font-semibold text-xl mb-4">
          Add-On Services
        </h2>
        <p>Virtual Staging: $50 per photo</p>
        <p>Twilight Photography: $100 per session</p>
        <p>Rush Delivery (24 hours): Additional $150</p>
      </section>

      <section
        id="contact"
        className="flex md:items-center flex-col mt-20 px-4"
      >
        <h2 className="font-dellaRespira uppercase font-semibold text-xl mb-4">
          Contact Us
        </h2>
        <p>
          For custom packages or further inquiries, please{" "}
          <a href="/contact">reach us at:</a>.
        </p>
        <div className="space-x-5 mt-4 uppercase text-sm">
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
      </section>
      <div className="flex md:justify-evenly justify-between items-center px-4 my-10 py-6 max-w-2xl mx-auto">
        <h3 className="text-start ">
          Picture Perfect Listings.
          <br />
          Every Time.
        </h3>
        <hr className="flex-1 mx-6 bg-[#c29c5bc0] h-px border-0" />
        <Link href="/book" className="text-[#C29C5B]  text-center">
          BOOK
        </Link>
      </div>
    </main>
  );
};

export default page;
