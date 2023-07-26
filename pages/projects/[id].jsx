import style from "../../styles/project.module.css";
import { useRouter } from "next/router";
import { Banner } from "../../Components/Banner/Banner.jsx";
import { interiorProjects } from "../../data/projects.js";
import React, { useEffect } from "react";
import Image from "next/image.js";

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
    // Disable right-clicking on the entire page
    // document.addEventListener("contextmenu", (e) => {
    //   e.preventDefault();
    // });

    // Disable dragging on the photos
    document.querySelectorAll(".image").forEach((img) => {
      img.addEventListener("dragstart", (e) => {
        e.preventDefault();
      });
    });
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
      <section className="container-fluid">
        <h1 className="title text-gradient text-center py-100 m-0">
          معرض التصاميم
        </h1>
        <section>
          <div ref={reveal} className="gallery-container">
            {project?.images.map((image, index) => {
              return (
                <div key={index} className="">
                  <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
                    <Image
                      src={image}
                      alt={project.title}
                      width={505}
                      height={280}
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
