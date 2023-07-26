import { useRouter } from "next/router";
import { Banner } from "../../Components/Banner/Banner.jsx";
import { interiorProjects, outroProjects } from "../../data/projects.js";
import React, { lazy, useEffect } from "react";
import Image from "next/image.js";

export default function Project() {
  const router = useRouter();
  const { id } = router.query;

  const allProjects = [...interiorProjects, ...outroProjects];
  const project = allProjects.find((p) => p.id === parseInt(id));

  const reveal = React.useRef(null);
  useEffect(() => {
    document.querySelectorAll(".image").forEach((img) => {
      img.addEventListener("dragstart", (e) => {
        e.preventDefault();
      });
    });

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
          <div
            ref={reveal}
            className="row gy-4 bg-light"
          >
            {project?.images.map((image, index) => {
              return (
                <div key={index} className="col-md-6">
                  <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
                    <Image
                      src={image}
                      loading="lazy"
                      alt={project.title}
                      width={1200}
                      height={630}
                      className="w-100 h-100 image"
                    />
                    <a
                      href="#!"
                      data-mdb-toggle="modal"
                      data-mdb-target={`#Modal${index}`}
                      className="magnify"
                    >
                      <div className="mask"></div>
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
                className="modal fade"
                id={`Modal${index}`}
                tabIndex="-1"
                aria-labelledby="exampleModal1Label"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-fullscreen position-relative">
                  <div className="modal-content">
                    <div className="text-center position-absolute top-0 end-0 p-5 m-5 py-3 z-3">
                      <button
                        type="button"
                        className="btn btn-warning"
                        data-mdb-dismiss="modal"
                      >
                        إغلاق
                      </button>
                    </div>
                    <div className="ratio ratio-16x9">
                      <Image
                        src={image}
                        loading="lazy"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="w-100 h-100 image"
                      />
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
