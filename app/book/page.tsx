import React from "react";
import InlineBook from "../components/InlineBook";

const page = () => {
  return (
    <div className="bg-[#F5F5F3] min-h-screen font-raleway overflow-y-scroll mb-10">
      <h1 className="text-lg text-center py-10">
        Book Your Photography Session
      </h1>
      <InlineBook />
    </div>
  );
};

export default page;
