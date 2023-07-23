import React, { useEffect } from "react";
import style from "./About.module.css";
import Link from "next/link.js";

export const About = () => {
  const reveal = React.useRef(null);

  useEffect(() => {
    async function animate() {
      if (reveal.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(reveal.current, {
          origin: "top",
          distance: "-30px",
          delay: 200,
        });
      }
    }
    animate();
  }, []);
  return (
    <>
      <section ref={reveal} className="container py-100">
        <div className="row align-items-center">
          <div className="col-md-6 ps-4">
            <h1 className="text-gradient title pb-3 m-0">مَـن نحـنُ</h1>
            <p>
              نحـن مكتـب النخبـة للإستشـارات الهندسـية والمقـاولات، فرضنـا
              أنفسـنا على السـاحة رغـم قـوة التنافـس بالسـوق السـعودي فـي وجـود
              شـركات عالميـة ومحليـة. وخـلال وقـت قصير أصبحنا من أفضـل المكاتب
              الناشـئة بفضل اللـه ثـم ثقة عملائنا.
            </p>
            <Link href={"/"}>
              <button
                type="button"
                className="btn btn-outline-warning fs-6 fw-bold my-4 rounded-0"
              >
                المـزيـد
              </button>
            </Link>
          </div>
          <div className="col-md-6 position-relative img_border">
            <img src="/test.jpg" className="w-100" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
