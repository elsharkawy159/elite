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
              <h6 className="fw-bold mb-4 fs-4 text-main">
                <i className="fas fa-gem me-3 mx-2 text-main"></i>النخبه
              </h6>
              <section className="d-flex justify-content-center">
                <div className="d-flex">
                  <a href="" className="me-4 fs-4 link-secondary">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="" className="me-4 fs-4 link-secondary">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="" className="me-4 fs-4 link-secondary">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="" className="me-4 fs-4 link-secondary">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="" className="me-4 fs-4 link-secondary">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="" className="me-4 fs-4 link-secondary">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </section>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-light">
              <h6 className="text-uppercase fw-bold mb-4 ">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">عن النخبة</h6>

                <Link href="/about" className="text-reset mb-5">
                  من نحن
                </Link>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3 text-secondary"></i> New York, NY
                10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary"></i>
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3 text-secondary"></i> + 01 234
                567 88
              </p>
              <p>
                <i className="fas fa-print me-3 text-secondary"></i> + 01 234
                567 89
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4">
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
};
