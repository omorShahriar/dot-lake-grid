import { NavLink, useLocation } from "@remix-run/react";

const Link = ({ children, to }) => {
  const location = useLocation();
  console.log(location);
  return (
    <NavLink to={to} className=" text-white text-xl font-medium ">
      {children}
    </NavLink>
  );
};

export default Link;
