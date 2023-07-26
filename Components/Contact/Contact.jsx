import React from "react";
import style from "./Contact.module.css";
import Link from "next/link.js";

export const Contact = () => {
  return (
    <>
      <section className="container py-100">
        <div className="row my-5">
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div className={style.contactIcon}>
              <i className={`fa-solid fa-location-dot`}></i>
            </div>
            <Link href={"/"} className="h5 hover text-center">
              حفر الباطن - حي البلدية - شارع قتيبة بن مسلم
            </Link>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div className={style.contactIcon}>
              <i className={`fas fa-phone`}></i>
            </div>
            <Link href={"/"} className="h5 hover phone">
              055 246 2856
              <br />
              050 902 7773
            </Link>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div className={style.contactIcon}>
              <i className={`fa-solid fa-envelope`}></i>
            </div>
            <Link href={"/"} className="h5 hover">
              info@elite-sa.com
            </Link>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div className={style.contactIcon}>
              <i className={`fa-regular fa-clock`}></i>
            </div>
            <Link href={"/"} className="h5 hover">
              24/7
            </Link>
          </div>
        </div>
        <div className="row align-items-center border-top border-bottom rounded py-4">
          <div className="col-md-6">
            <h2 className="text-gradient title mb-4">تواصل معنا</h2>
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
              <button type="submit" className="btn btn-outline-warning my-4">
                إرسال
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d219.29186017999862!2d45.9760253!3d28.4292199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fd7413803d662d7%3A0x43ae92e0bf6cdb28!2z2KfZhNmG2K7YqNmHINin2YTYsNmH2KjZitmHINmE2YTYp9iz2KrYtNin2LHYp9iqINin2YTZh9mG2K_Ys9mK2Yc!5e0!3m2!1sen!2seg!4v1689433141627!5m2!1sen!2seg"
                width="100%"
                height="500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
