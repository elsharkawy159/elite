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
            <section>
              <section>
                <div style={{ width: "fit-content" }}>
                  <div>
                    <div
                      class="bg-image ripple mb-4 rounded"
                      data-ripple-color="light"
                    >
                      <i
                        className="fa-solid fa-circle-play text-gradient"
                        style={{ fontSize: "55px" }}
                      ></i>
                      <a
                        href="#!"
                        data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal3"
                      >
                        <div class="mask"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div
                  class="modal fade"
                  id="exampleModal3"
                  tabindex="-1"
                  aria-labelledby="exampleModal1Label"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="ratio ratio-16x9">
                        <iframe
                          src="https://www.youtube.com/embed/vj85VRD0Hzo"
                          title="YouTube video"
                          allowfullscreen
                        ></iframe>
                      </div>

                      <div class="text-center py-3">
                        <button
                          type="button"
                          class="btn btn-warning"
                          data-mdb-dismiss="modal"
                        >
                          إغلاق
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
          <div className="col-md-6 position-relative img_border">
            <img src="/test.jpg" className="w-100" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
