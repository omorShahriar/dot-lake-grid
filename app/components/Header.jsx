import { Link as RemixLink } from "@remix-run/react";
import Button from "./Button";
import Link from "./Link";
const Header = () => {
  return (
    <header className=" w-full fixed top-0 left-0 bg-dotOrange pt-10 pb-14 px-10">
      <nav className=" flex justify-between items-center ">
        <div className=" w-20  ">
          <RemixLink to="/">
            <img alt="brand logo" src="/brand-log.png" />
          </RemixLink>
        </div>
        <ul className=" flex items-center gap-x-12">
          <li>
            <Link to="/" end>
              Home
            </Link>
          </li>
          <li>
            <Link to="/archives">Archives</Link>
          </li>
          <li>
            <Button to="https://teejuh.org/">Teejuh</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
