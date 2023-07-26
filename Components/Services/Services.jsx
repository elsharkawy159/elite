import React, { lazy, useEffect } from "react";
import style from "./Services.module.css";
import Link from "next/link.js";
import serviceData from "../../data/services.js";
import Image from "next/image.js";

const ServiceItem = ({ icon, title, image }) => {
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
    <div ref={reveal} className={`col-lg-4 col-md-6 col-12`}>
      <Link href={`/services/#${title}`}>
        <div className={`${style.service} card hvrShadow`}>
          <Image
            src={image}
            className="card-img-top w-100"
            alt={title}
            width={1200}
            height={260}
          />
          <div className="card-body">
            <p className="card-text text-center fw-bold h5">{title}</p>
          </div>
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
              خدمـاتنا
              <p className="fw-light fs-6">
                نقدم العديد من الخدمات ذات الصله الإنشاءات و المقاولات و أهمهم
                التالي
              </p>
            </h1>
            {serviceData.slice(0, 3).map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                image={service.imageURL}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
