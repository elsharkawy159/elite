import Image from "next/image";
import Link from "next/link";
import style from "./VideoBanner.module.css";

export const VideoBanner = () => {
  return (
    <div
      className={`video-banner ${style.video_banner_bg} ${style.bgImage} text-center`}
    >
      <section className="h-100">
        <section className="h-100 d-flex justify-content-center align-items-center">
          <div class={`${style.btn_video} z-3`}>
            <i className="fa-solid fa-play"></i>
            <Link
              href="#!"
              data-mdb-toggle="modal"
              data-mdb-target="#exampleModal3"
            >
              <div class="mask"></div>
            </Link>
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
      <div className={style.overlay}></div>
    </div>
  );
};
