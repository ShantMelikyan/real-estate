import Image from "next/image";
import logo from "@/public/estatesshots-logo.png";
import connect from "@/public/connect.png";
import Book from "./components/PopupBook";

export default function Home() {
  return (
    <main className=" w-full  text-[#1F1F1F] px-4">
      <section className="flex flex-col items-center pt-10">
        <span className="md:my-8 my-6 text-center uppercase  tracking-wider">
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
      <section id="packages" className="py-20 mt-10">
        <h2 className="text-center uppercase font-dellaRespira text-xl font-semibold">
          Our Diverse Photography Services
        </h2>
        <h3 className="text-center mt-4 mb-16">
          Your All-in-One Photography Solution.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-3xl xl:max-w-5xl md:mx-auto px-4 gap-10 [&>*]:flex-1">
          <article>
            <h2 className="font-dellaRespira uppercase font-medium text-lg">
              Photography
            </h2>
            <p className="text-lg mb-4">Any type of property</p>
            <p>
              Showcasing properties in their best light with attention to detail
              and composition.
            </p>
          </article>
          <article>
            <h2 className="font-dellaRespira uppercase font-medium text-lg">
              Aerial Drone Shots
            </h2>
            <p className="text-lg mb-4">Photo and video</p>
            <p>
              Offering a unique perspective with high-quality aerial images that
              highlight property layouts and surrounding areas.
            </p>
          </article>
          <article>
            <h2 className="font-dellaRespira uppercase font-medium text-lg">
              Real Estate Videos
            </h2>
            <p className=" text-lg mb-4">Cinematic video tours</p>
            <p>
              Creating immersive 3D tours that allow prospective buyers to
              explore properties remotely.
            </p>
          </article>
          <article>
            <h2 className="font-dellaRespira uppercase font-medium text-lg">
              Virtual Tours
            </h2>
            <p className=" text-lg mb-4">Matterport</p>
            <p>
              Creating immersive 3D tours that allow prospective buyers to
              explore properties remotely.
            </p>
          </article>
          <article>
            <h2 className="font-dellaRespira uppercase font-medium text-lg">
              FLOOR PLANS
            </h2>
            <p className="text-lg mb-4">Detailed and Accurate Layouts</p>
            <p>
              Providing detailed floor plans to give a comprehensive view of the
              property&apos;s layout, making it easier for buyers to envision
              their future in the property.
            </p>
          </article>
          <article>
            <h2 className="font-dellaRespira uppercase font-medium text-lg">
              VIRTUAL STAGING
            </h2>
            <p className="text-lg mb-4">Digitally Furnished Interiors</p>
            <p>
              Transforming empty spaces into beautifully staged homes with our
              virtual staging, helping buyers to visualize the property&apos;s
              potential.
            </p>
          </article>
          <article>
            <h2 className="font-dellaRespira uppercase font-medium text-lg">
              TWILIGHT PHOTOGRAPHY
            </h2>
            <p className="text-lg mb-4">Magic of Dusk</p>
            <p>
              Highlighting the property&apos;s exterior and landscaping under
              the warm glow of sunset with inviting atmosphere that stands out
              in listings.
            </p>
          </article>
          <article>
            <h2 className="font-dellaRespira uppercase font-medium text-lg">
              VIRTUAL TWILIGHTS & IMAGE EDITING
            </h2>
            <p className="text-lg mb-4">
              Light into Twilight & Polished Photography
            </p>
            <p>
              Transform day shots into twilight views, while our Image Editing
              ensures every photo is flawlessly presented.
            </p>
          </article>
        </div>
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
