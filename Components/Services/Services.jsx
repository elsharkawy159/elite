import React, { useEffect } from "react";
import style from "./Services.module.css";
import Link from "next/link.js";
import serviceData from "../../data/services.js";

const ServiceItem = ({ icon, title }) => {
  const reveal = React.useRef(null);

  useEffect(() => {
    async function animate() {
      if (reveal.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(reveal.current, {
          origin: "top",
          distance: "-30px",
          delay: 100,
        });
      }
    }
    animate();
  }, []);

  return (
    <div ref={reveal} className={`col-md-3`}>
      <Link href={"/services"}>
        <div
          className={`${style.service} py-4 d-flex flex-column justify-content-center align-items-center`}
        >
          <div>
            <i className={`${icon} ${style.icon} title mb-3`}></i>
          </div>
          <h2 className="h4 fw-semibold">{title}</h2>
        </div>
      </Link>
    </div>
  );
};
export const Services = () => {
  return (
    <>
      <section className="bg-light py-100">
        <div className="container">
          <div className="row gy-5 justify-content-center">
            <h1 className="headline text-center text-gradient title mb-4">
              خدماتنـا
            </h1>
            {serviceData.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                className={service.className}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
