import React, { useEffect } from "react";
import { Banner } from "../Components/Banner/Banner.jsx";
import { InfoSection } from "../Components/InfoSection/InfoSection.jsx";
import serviceData from "../data/services.js";

function Services() {
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
      <Banner
        title={"الخدمات"}
        description={"نحن نقدم العديد من الخدمات ذات الصله بالإنشائات"}
        prev={"الرئيسية"}
        current={"الخدمات"}
      />
      <div ref={reveal}>
        {serviceData.map((service) => {
          const isOdd = service.id % 2 === 1;
          return (
            <InfoSection
              key={service.id}
              title={service.title}
              icon={service.icon}
              description={service.description}
              imageURL={service.imageURL}
              dir={isOdd}
            />
          );
        })}
      </div>
    </>
  );
}

export default Services;
