import React, { useEffect } from "react";
import style from "./Map.module.css";
export const Map = () => {
  const reveal = React.useRef(null);

  useEffect(() => {
    async function animate() {
      if (reveal.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(reveal.current, {
          origin: "top",
          distance: "-120px",
          delay: 0,
        });
      }
    }
    animate();
  }, []);
  return (
    <>
      <section ref={reveal} className="container-fluid p-0 position-relative">
        <div className="contact-map ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d219.29186017999862!2d45.9760253!3d28.4292199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fd7413803d662d7%3A0x43ae92e0bf6cdb28!2z2KfZhNmG2K7YqNmHINin2YTYsNmH2KjZitmHINmE2YTYp9iz2KrYtNin2LHYp9iqINin2YTZh9mG2K_Ys9mK2Yc!5e0!3m2!1sen!2seg!4v1689433141627!5m2!1sen!2seg"
            width="100%"
            height="650"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={`row ${style.form} position-absolute translate-middle`}>
          <div className="col-md-12 bg-dark bg-opacity-25 rounded-3 p-5">
            <h3 className="title text-light my-4">تواصل معنا</h3>
            <form action="">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="الإسم"
                  maxLength={40}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="البريد الإلكتروني"
                  maxLength={40}
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="رقم الهاتف"
                  maxLength={15}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                  maxLength={500}
                  placeholder="الرسالة"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-outline-warning text-light fw-bolder"
              >
                إرسال
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
