"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
const PopupBook = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#C29C5B" } },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <button
      className="text-[#C29C5B]"
      data-cal-link="estatesshots/book"
      data-cal-config='{"layout":"month_view"}'
    >
      BOOK
    </button>
  );
};
export default PopupBook;
