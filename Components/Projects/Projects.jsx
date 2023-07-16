import React, { useEffect } from "react";
import style from "./Projects.module.css";
import Image from "next/image.js";
import Link from "next/link.js";
import { interiorProjects } from "../../data/projects.js";

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
      <section className="container-fluid py-100">
        <div className="mb-5">
          <h1 className="title text-center text-gradient">مشاريعنـا</h1>
          <p className="text-center opacity-75">
            نحن نقدم العديد من أنواع المشاريع
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
            <div className="row bg1 gy-3 justify-content-center">
              {interiorProjects.map((project) => {
                return (
                  <div ref={reveal} className={`col-md-3`} key={project.id}>
                    <Link href={`projects/${project.id}`}>
                      <div className={style.snip1295}>
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          width={400}
                          height={230}
                          className="w-100 h-100"
                        />
                        <div className={`${style.border} ${style.one}`}>
                          <div></div>
                        </div>
                        <div className={`${style.border} ${style.two}`}>
                          <div></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <Link href={"/projects"} ref={reveal}>
              <button className="btn btn-warning d-flex justify-content-center mx-auto mt-5">
                المزيد
              </button>
            </Link>
          </div>
          <div
            className="tab-pane fade"
            id="ex1-tabs-2"
            role="tabpanel"
            aria-labelledby="ex1-tab-2"
          >
            <div className="col-md-4">
              <Image
                src={"/test.jpg"}
                alt="test"
                width={415}
                height={275}
                className="rounded w-100 h-100"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
