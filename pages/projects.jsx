import React, { useEffect } from "react";
import { Banner } from "../Components/Banner/Banner.jsx";
import { interiorProjects, outroProjects } from "../data/projects.js";
import Link from "next/link";
import Image from "next/image.js";

function projects() {
  const reveal = React.useRef(null);

  useEffect(() => {
    async function animate() {
      if (reveal.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(reveal.current, {
          origin: "top",
          distance: "-20px", // adjust this value to control the fade distance
          delay: 50,
        });
      }
    }
    animate();
  }, []);

  return (
    <>
      <Banner
        title={"مشاريعنا"}
        description={"نقدم العديد من المشاريع في مختلف أنواع الإنشاءات و التصاميم الداخلية و الخارجية"}
        prev={"الرئيسية"}
        current={"أعمالنا"}
      />
      <div className="container py-100">
        <div ref={reveal} className="row shadow-sm rounded-3 py-4 gy-3 justify-content-center">
          {interiorProjects.map((project) => {
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
                      <p className="m-0">الملفات: {project.images.length}</p>
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
          {outroProjects.map((project) => {
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
                      <p className="m-0">الملفات: {project.images.length}</p>
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
    </>
  );
}

export default projects;
