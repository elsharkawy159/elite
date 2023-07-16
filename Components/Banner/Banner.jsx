import React from "react";
import style from "./Banner.module.css";
import Link from "next/link.js";

export const Banner = ({ title, description, prev, current, imageURL }) => {
  return (
    <>
      <section
        className={`container-fluid  ${style.banner}`}
        style={{
          backgroundImage: imageURL ? `url(${imageURL})` : `url('/6.jpg')`,
        }}
      >
        <div className="row dark_overlay align-content-center p-0 m-0">
          <h1 className="text-center title text-gradient m-0">{title}</h1>
          <p className="m-0 text-center text-light">{description}</p>
        </div>
        <div className="dir container h-100 d-flex align-items-end pb-4 text-light">
          <Link href={"/"} className="z-1">
            <h3 className="h6 text-light fw-semibold">{prev}</h3>
          </Link>
          <h3 className="h6 mx-2 opacity-80 z-1"> / </h3>
          <h3 className="h6 opacity-80 z-1 fw-semibold">{current}</h3>
        </div>
      </section>
    </>
  );
};
