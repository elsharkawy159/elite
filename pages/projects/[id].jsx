import style from "../../styles/project.module.css";
import { useRouter } from "next/router";
import { Banner } from "../../Components/Banner/Banner.jsx";
import { interiorProjects } from "../../data/projects.js";
import React, { useEffect } from "react";
export default function Project() {

  const router = useRouter();
  const { id } = router.query;

  const project = interiorProjects.find((p) => p.id === parseInt(id));

        const reveal = React.useRef(null);
        useEffect(() => {
          async function animate() {
            if (reveal.current) {
              const sr = (await import("scrollreveal")).default;
              sr().reveal(reveal.current, { delay: 0 });
            }
          }
          animate();
        }, []);

  return (
    <>
      <Banner
        title={project?.title}
        description={project?.description}
        prev={"الرئيسية / المشاريع"}
        current={project?.title}
        imageURL={project?.images[0]}
      />
      <section className="container">
        <h1 className="title text-gradient text-center py-100 m-0">
          معرض التصاميم
        </h1>
        <section>
          <div ref={reveal} class="row g-4">
            {project?.images.map((image, index) => {
              return (
                <div class="col-lg-6 col-md-12 mb-4 mb-lg-0" key={index}>
                  <div
                    class="bg-image hover-overlay ripple shadow-1-strong rounded"
                    data-ripple-color="light"
                  >
                    <img src={image} alt={project.title} class="w-100" />
                    <a
                      href="#!"
                      data-mdb-toggle="modal"
                      data-mdb-target={`#Modal${index}`}
                      className="magnify"
                    >
                      <div class="mask"></div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          {project?.images.map((image, index) => {
            return (
              <div
                class="modal fade"
                id={`Modal${index}`}
                tabindex="-1"
                aria-labelledby="exampleModal1Label"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-fullscreen position-relative">
                  <div class="modal-content">
                    <div class="text-center position-absolute top-0 end-0 p-5 m-5 py-3 z-3">
                      <button
                        type="button"
                        class="btn btn-warning"
                        data-mdb-dismiss="modal"
                      >
                        إغلاق
                      </button>
                    </div>
                    <div class="ratio ratio-16x9">
                      <img src={image} class="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
}
