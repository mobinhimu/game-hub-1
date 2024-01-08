import { useEffect } from "react";

import previewImg from "../assets/my_preview_image.jpg";

function WebsiteLinkChange() {
  useEffect(() => {
    const head = document.querySelector("head");

    const metaTags = [
      {
        property: "og:image",
        content: previewImg,
      },
      { property: "og:title", content: "Game Hub - MOBIN" },
      {
        property: "og:description",
        content: "A video game discovery site",
      },
    ];

    metaTags.forEach((tag) => {
      const meta = document.createElement("meta");
      Object.entries(tag).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      head?.appendChild(meta);
    });
  }, []);

  return null;
}

export default WebsiteLinkChange;
