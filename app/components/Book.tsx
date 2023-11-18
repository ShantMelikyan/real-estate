/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
"use client";
import { useEffect } from "react";

const Book = () => {
  useEffect(() => {
    const initializeCal = async () => {
      const { getCalApi } = await import("@calcom/embed-react");
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#C29C5B" } },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    };

    initializeCal();
  }, []);

  return (
    <button
      data-cal-link="estateshots/book"
      data-cal-config='{"layout":"month_view"}'
      className="text-[#C29C5B]"
    >
      BOOK
    </button>
  );
};

export default Book;
