import React, { useEffect, useRef, useState } from "react";

const RevealHeading = () => {
  let h1 = useRef<HTMLHeadingElement>(null);
  let [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (!h1.current?.getBoundingClientRect()) return;
    if (h1.current.getBoundingClientRect().top > 25) setAnimation(true);

    window.addEventListener("scroll", () => {
      if (!h1.current?.getBoundingClientRect()) return;
      if (h1.current.getBoundingClientRect().top > 25) setAnimation(true);
    });
  }, []);

  return (
    <h1 ref={h1} className={animation ? "animated" : "hidden"} id="main-head">
      Personalized Job Search Portal using Web Scraping
    </h1>
  );
};

export default RevealHeading;
