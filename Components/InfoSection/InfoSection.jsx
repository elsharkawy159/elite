import React, { useEffect } from "react";
import style from "./InfoSection.module.css";
import Image from "next/image.js";

export const InfoSection = ({
  key,
  title,
  description,
  imageURL,
  icon,
  dir = false,
}) => {
  const reveal = React.useRef(null);

  useEffect(() => {
    async function animate() {
      if (reveal.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(reveal.current, {
          origin: "top",
          distance: "-30px",
          delay: 50,
        });
      }
    }
    animate();
  }, []);
  return (
    <>
      <section id={title} ref={reveal} className="container py-5">
        <div
          className={`row align-items-center ${
            dir ? "flex-row-reverse" : null
          }`}
        >
          <div className="col-md-6 position-relative img_border">
            <Image
              src={imageURL}
              alt={title}
              width={500}
              height={500}
              className="w-100 h-100"
            />
          </div>
          <div className="col-md-6">
            <i className={`${icon} fs-1 text-gradient mt-4`}></i>
            <h1 className="text-gradient title my-2 ">{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </section>
    </>
  );
};
