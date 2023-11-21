import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-center">
     
      <p className="">© 2023 Estates Shots. All rights reserved.</p>
      <p className="text-center text-sm font-light tracking-wider  md:py-2">
        Design & Dev by{" "}
        <a
          aria-label="SM"
          className="cursor-pointer font-light"
          href="https://shantmelikyan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          SM
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
