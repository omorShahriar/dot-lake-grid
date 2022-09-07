import { Link as RemixLink, useLocation } from "@remix-run/react";
import { useState } from "react";
import { ArrowTopRightSquare } from "./Icons";

import Link from "./Link";
import MobileNav from "./MobileNav";

const Header = () => {
  const { pathname } = useLocation();
  let pathCheck = false;
  const routes = ["/archives", "/archives/images", "/archives/audio", "/mmip"];
  routes.forEach((r) => {
    if (r == pathname) {
      return (pathCheck = true);
    }
  });
  return (
    <header
      className={`z-50 w-full fixed top-0 left-0 ${
        pathCheck ? " bg-dotOrange  lg:bg-transparent" : "bg-dotOrange"
      }  md:py-8 py-6 px-10`}
    >
      <nav className=" hidden md:flex justify-between items-center ">
        <div className=" w-20 h-20  ">
          <RemixLink to="/">
            <img
              alt="brand logo"
              src={`${
                pathCheck ? "/brand-logo-white.png " : "/brand-logo.png"
              }`}
            />
          </RemixLink>
        </div>
        <ul className=" flex items-center gap-x-12">
          <li>
            <Link to="/" end>
              Home
            </Link>
          </li>
          <li>
            <Link to="/mmip">MMIP</Link>
          </li>
          <li>
            <Link to="/archives/images">Archives</Link>
          </li>
        </ul>
        <div className="">
          <a
            href="https://teejuh.org/"
            target="_blank"
            rel="noreferrer"
            className="  flex items-center justify-center gap-x-4 text-white "
          >
            <span className=" block pt-3 text-xl">Teejuh</span>

            <ArrowTopRightSquare className=" w-6 h-6  " />
          </a>
        </div>
      </nav>
      <MobileNav />
    </header>
  );
};

export default Header;
