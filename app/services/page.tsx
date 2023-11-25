import React from "react";
import Image from "next/image";

import floorplans from "@/public/floorplans.png";
const services = [
  {
    id: "photography",
    name: "PHOTOGRAPHY",
    description:
      "Specializing in real estate photography, we capture the essence of every property, highlighting its unique features and charm. Our expert photographers focus on detail and composition to present your property in its best light, attracting potential buyers with high-quality, visually appealing images. Ideal for any type of property, our photography service ensures your listings stand out in the competitive real estate market.",
    imageUrl: floorplans,
  },
  {
    id: "aerial-drone-shots",
    name: "AERIAL DRONE SHOTS",
    description:
      "Elevate your property listings with our Aerial Drone Shots service. Offering both photo and video options, we provide a stunning bird's-eye view of your property. Our high-quality aerial images showcase property layouts and the surrounding area, offering potential buyers a unique and comprehensive perspective. Perfect for large estates, commercial properties, and scenic locations, our drone photography captures the full extent and beauty of your real estate offerings.",
    imageUrl: floorplans,
  },
  {
    id: "real-estate-videos",
    name: "REAL ESTATE VIDEOS",
    description:
      "Bring properties to life with our Real Estate Video service. We create cinematic video tours that offer an immersive and dynamic viewing experience. Our expertly crafted videos allow prospective buyers to explore properties remotely, providing a detailed and engaging walkthrough. From highlighting key features to showcasing the overall feel of the space, our real estate videos are an essential tool for modern property marketing.",
    imageUrl: floorplans,
  },
  {
    id: "virtual-tours",
    name: "VIRTUAL TOURS",
    description:
      "Step into the future of property showcasing with our Virtual Tours service. Utilizing Matterport technology, we create detailed and immersive 3D tours of your property. This cutting-edge service allows prospective buyers to explore properties at their own pace, from the comfort of their home. Virtual tours are an invaluable tool for remote buyers and a great way to enhance your property's online presence.",
    imageUrl: floorplans,
  },
  {
    id: "floor-plans",
    name: "FLOOR PLANS",
    description:
      "Our Floor Plans service provides detailed and accurate layouts of your property, giving potential buyers a clear overview of the space. These comprehensive floor plans are meticulously crafted to reflect the true dimensions and layout of each property, aiding buyers in visualizing their future home. An essential component of any property listing, our floor plans are both informative and visually appealing.",
    imageUrl: floorplans,
  },
  {
    id: "virtual-staging",
    name: "VIRTUAL STAGING",
    description:
      "Transform empty spaces into inviting homes with our Virtual Staging service. We digitally furnish interiors, showing the full potential of your property. This service helps buyers visualize themselves in the space, enhancing the appeal of your listings. Virtual staging is a cost-effective and impactful way to attract more interest and convey the possibilities of an unfurnished property.",
    imageUrl: floorplans,
  },
  {
    id: "twilight-photography",
    name: "TWILIGHT PHOTOGRAPHY",
    description:
      "Capture the magic of dusk with our Twilight Photography service. We specialize in showcasing properties under the warm, inviting glow of sunset. This service highlights the exterior beauty and landscaping of your property, creating an atmosphere that stands out in listings. Twilight photography adds a touch of elegance and charm, attracting more attention and setting your property apart.",
    imageUrl: floorplans,
  },
  {
    id: "virtual-twilights-image-editing",
    name: "VIRTUAL TWILIGHTS & IMAGE EDITING",
    description:
      "With our Virtual Twilights & Image Editing service, we transform day shots into captivating twilight views. Our expert image editing ensures every photo is flawlessly presented, highlighting the best features of your property. This service is perfect for enhancing the visual appeal of your listings, ensuring they grab attention and leave a lasting impression on potential buyers.",
    imageUrl: floorplans,
  },
];

const page = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center uppercase font-dellaRespira text-xl font-semibold my-14">Our Services</h1>
      <div className="grid grid-cols-2 md:grid-cols-8 md:h-[300px] h-[800px] ">
        {services.map((service) => (
          <a
            href={`#${service.id}`}
            key={service.id}
            className="relative block overflow-hidden group"
          >
            <Image
              src={service.imageUrl}
              alt={service.name}
              className="h-full w-full object-cover transition-all duration-500 scale-125 group-hover:scale-100"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 hover:bg-white/70 text-white hover:text-black duration-500">
              <span className=" text-center font-semibold">{service.name}</span>
            </div>
          </a>
        ))}
      </div>

      {services.map((service) => (
        <div id={service.id} key={service.id} className="my-10">
       <h3 className="font-dellaRespira uppercase font-medium text-lg">{service.name}</h3>
          <p>{service.description}</p>
          {/* Additional content */}
        </div>
      ))}
    </div>
  );
};

export default page;
