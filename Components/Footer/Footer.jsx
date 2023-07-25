import React from "react";
import style from "./Footer.module.css";
import Link from "next/link.js";

export const Footer = () => {
  return (
    <footer
      className={`${style.footer} rounded-1 text-center m-auto mb-4 mt-5`}
    >
      <section>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold mb-4 fs-4">
                <i className="fas fa-gem ms-3 text-main"></i>النخبه
              </h6>
              <h6 className="text-uppercase fw-bold mt-5 mb-4">تابعنا على</h6>
              <section className="d-flex justify-content-center">
                <div className="d-flex justify-content-evenly w-100">
                  <Link
                    href="https://www.tiktok.com/@eli_0te"
                    className="fs-4 text-light opacity-90"
                    target="_blank"
                  >
                    <i className="fa-brands fa-tiktok"></i>
                  </Link>
                  <Link
                    href="https://www.instagram.com/eli_0te/"
                    className="fs-4 text-light opacity-90"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link
                    href=""
                    className="fs-4 text-light opacity-90"
                    target="_blank"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>

                  <Link
                    href=""
                    className="fs-4 text-light opacity-90"
                    target="_blank"
                  >
                    <i className="fab fa-snapchat"></i>
                  </Link>
                </div>
              </section>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">روابط مفيدة</h6>
              <p>
                <Link href="/about" className="text-light opacity-90">
                  من نحن
                </Link>
              </p>
              <p>
                <Link href="/about" className="text-light opacity-90">
                  الخدمات
                </Link>
              </p>
              <p>
                <Link href="/about" className="text-light opacity-90">
                  أعمالنا
                </Link>
              </p>
              <p>
                <Link href="/about" className="text-light opacity-90">
                  تواصل معنا
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">تواصل معنا</h6>
              <p>
                <Link href={"/"} className="text-light">
                  <i className="fas fa-home ms-3"></i>
                  قتيبة بن مسلم - البلدية - حفر الباطن
                </Link>
              </p>
              <p>
                <Link href={"/"} className="text-light">
                  <i className="fas fa-envelope ms-3"></i>
                  info@example.com
                </Link>
              </p>
              <p>
                <Link href={"/"} className="text-light">
                  <i className="fas fa-phone ms-3"></i>
                  0123123123
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center pt-3">
        حقوق النشر © 2023
        <span className="text-main"> النخبه للإستثمارات الهندسية، </span>
        جميع الحقوق محفوظة، تم التطوير من قبل{" "}
        <Link
          href={"https://www.linkedin.com/in/omar-m-abdelhamid-b78151195/"}
          target="_blank"
          className="text-light opacity-70"
        >
          م/عمر محمد
        </Link>
      </div>
    </footer>
  );
};
