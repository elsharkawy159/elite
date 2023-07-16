import React, { useEffect } from "react";
import { Banner } from "../Components/Banner/Banner.jsx";
import { Contact } from "../Components/Contact/Contact.jsx";

export default function contact() {
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
        title={"تواصـل معنـا"}
        description={"يمكنك التواصل معنا في أي وقت"}
        prev={"الرئيسيىة"}
        current={"تواصل معنا"}
      />
      <div ref={reveal}>
        <Contact />
      </div>
    </>
  );
}
