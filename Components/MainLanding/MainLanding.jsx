import React, { useEffect } from "react";
import styles from "./MainLanding.module.css";
import Link from "next/link.js";

export const MainLanding = () => {
        const reveal = React.useRef(null);
        useEffect(() => {
          async function animate() {
            if (reveal.current) {
              const sr = (await import("scrollreveal")).default;
              sr().reveal(reveal.current, { delay: 100 });
            }
          }
          animate();
        }, []);
  return (
    <>
      <section className={"vh-100"}>
        <div className={""}>
          <div className={styles.bg_container}>
            <video autoPlay muted loop className={styles.background_video}>
              <source src={"/mainVideo.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={"container h-100"}>
              <div className="row d-flex h-100 align-items-center">
                <div className="z-2">
                  <div className={"position-relative stick"}>
                    <h1 className="text-light mb-3 me-2 fw-semibold">
                      مكتب <span className="text-gradient">النخبـة</span>{" "}
                      للاستشارات الهندسية
                    </h1>
                    <p className="text-light me-2" ref={reveal}>
                      نحن متخصصون في تصميم النماذج ثلاثية الأبعاد والمقاولات
                      وغيرها من الخدمات ذات الصلة.
                    </p>
                  </div>
                  <Link href={"/contact"}>
                    <button
                      type="button"
                      className="btn btn-outline-warning fs-6 fw-bold my-2 rounded-0"
                    >
                      تواصـل معنـا
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={"dark_overlay"}></div>
          </div>
        </div>
      </section>
    </>
  );
};
