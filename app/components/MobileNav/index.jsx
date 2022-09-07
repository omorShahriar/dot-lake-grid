import { useState } from "react";
import { Link as RemixLink } from "@remix-run/react";
import Link from "../Link";
import { ArrowTopRightSquare, Cross, Bars } from "../Icons";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" md:hidden  ">
      <div className="h-full flex justify-between">
        <div className=" w-16 h-16  ">
          <RemixLink to="/">
            <img alt="brand logo" src="/brand-logo.png" />
          </RemixLink>
        </div>
        <div className=" absolute z-20 top-12 right-8 ">
          <button onClick={(e) => setOpen(!open)}>
            {open ? <Cross /> : <Bars />}
          </button>
        </div>
      </div>
      <div
        className={`w-screen h-screen flex bg-dotOrange absolute z-10 top-0 left-0 ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-all duration-700 ease-in-out flex justify-center items-center `}
      >
        <ul className=" flex flex-col gap-y-8 items-center ">
          <li onClick={(e) => setOpen(!open)}>
            <Link to="/" end>
              Home
            </Link>
          </li>
          <li onClick={(e) => setOpen(!open)}>
            {" "}
            <Link to="/mmip">MMIP</Link>
          </li>
          <li onClick={(e) => setOpen(!open)}>
            {" "}
            <Link to="/archives/images">Archives</Link>
          </li>
          <li className="mt-8" onClick={(e) => setOpen(!open)}>
            {" "}
            <a
              href="https://teejuh.org/"
              target="_blank"
              rel="noreferrer"
              className="  flex items-center justify-center gap-x-4 text-white "
            >
              <span className=" block pt-3 text-xl">Teejuh</span>

              <ArrowTopRightSquare className=" w-6 h-6  " />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
