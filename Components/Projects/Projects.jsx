import React, { useEffect } from "react";
import Image from "next/image.js";
import Link from "next/link.js";
import { interiorProjects, outroProjects } from "../../data/projects.js";

export const Projects = () => {
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
      <section className="container position-relative py-100">
        <div className="mb-5">
          <h1 className="title text-center text-gradient">مشاريعنا</h1>
          <p className="text-center opacity-75">
            نقدم العديد من المشاريع في مختلف أنواع الإنشاءات و التصاميم الداخلية
            و الخارجية كالتالي
          </p>
        </div>
        <ul
          className="nav d-flex justify-content-center nav-tabs mb-4"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active fs-5"
              id="ex1-tab-1"
              data-mdb-toggle="tab"
              href="#ex1-tabs-1"
              role="tab"
              aria-controls="ex1-tabs-1"
              aria-selected="true"
            >
              تصميم داخلي
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link fs-5"
              id="ex1-tab-2"
              data-mdb-toggle="tab"
              href="#ex1-tabs-2"
              role="tab"
              aria-controls="ex1-tabs-2"
              aria-selected="false"
            >
              تصميم خارجي
            </a>
          </li>
        </ul>
        <div className="tab-content" id="ex1-content">
          <div
            className="tab-pane fade show active"
            id="ex1-tabs-1"
            role="tabpanel"
            aria-labelledby="ex1-tab-1"
          >
            <div className="row gy-3 justify-content-center">
              {interiorProjects.slice(0, 8).map((project) => {
                return (
                  <div ref={reveal} className={`col-md-3`} key={project.id}>
                    <Link href={`projects/${project.id}`}>
                      <div className={"snip1295"}>
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          width={1200}
                          height={630}
                          className="w-100 h-100"
                        />
                        <div className={"title"}>
                          <p className="m-0">{project.title}</p>
                          <p className="m-0">
                            الملفات: {project.images.length}
                          </p>
                        </div>
                        <div className={`border one`}>
                          <div></div>
                        </div>
                        <div className={`border two`}>
                          <div></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="ex1-tabs-2"
            role="tabpanel"
            aria-labelledby="ex1-tab-2"
          >
            <div className="row gy-3 justify-content-center">
              {outroProjects.slice(0, 8).map((project) => {
                return (
                  <div ref={reveal} className={`col-md-3`} key={project.id}>
                    <Link href={`projects/${project.id}`}>
                      <div className={"snip1295"}>
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          width={1200}
                          height={630}
                          className="w-100 h-100"
                        />
                        <div className={"title"}>
                          <p className="m-0">{project.title}</p>
                          <p className="m-0">
                            الملفات: {project.images.length}
                          </p>
                        </div>
                        <div className={`border one`}>
                          <div></div>
                        </div>
                        <div className={`border two`}>
                          <div></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Link href={"/projects"} ref={reveal}>
          <button className="btn btn-warning d-flex justify-content-center mx-auto mt-5">
            المزيد
          </button>
        </Link>
      </section>
    </>
  );
};
