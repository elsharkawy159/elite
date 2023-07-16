import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 1);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `${styles.navbar} navbar navbar-expand-lg py-1 px-0 ${
    isScrolled ? "bg-light shadow fixed-top" : "bg-transparent fixed-top"
  }`;

  const liClasses = `${styles.nav_link} ${
    isScrolled ? "text-dark" : "text-light py-3"
  }`;

  return (
    <header>
      <nav className={navbarClasses}>
        <div className="container px-4">
          <Link
            href="/"
            className={`${liClasses} d-flex flex-column navbar-brand fw-bold fs-5 m-0 mb-1 p-0 opacity-100`}
          >
            <img src="/final-logo.png" alt="" width={100} className="m-auto" />
            <span className="text-sm m-0">للإستشارات الهندسية</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mt-0 mb-lg-0">
              <NavItem href="/about" text="من نحن" classes={liClasses} />
              <NavItem href="/services" text="الخدمـات" classes={liClasses} />
              <NavItem href="/projects" text="أعمالنـا" classes={liClasses} />
              <NavItem href="/contact" text="تواصل معنا" classes={liClasses} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({ href, text, classes }) => (
  <li className="nav-item py-3 position-relative">
    <Link legacyBehavior href={href}>
      <a className={`${classes} link`}>{text}</a>
    </Link>
  </li>
);

export default Navbar;
