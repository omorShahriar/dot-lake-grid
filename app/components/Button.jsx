import { Link } from "@remix-run/react";

const Button = ({ to, children, borderColor = "white", normal = true }) => {
  return normal ? (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className={` pt-3 pb-1 px-12 text-xl  ${
        borderColor == "white"
          ? "border-white text-white"
          : "border-black text-black"
      } border-2 `}
    >
      {children}
    </a>
  ) : (
    <Link
      to={to}
      className={` py-4 px-12 text-2xl ${
        borderColor == "white" ? "border-white" : "border-black"
      } border-2 `}
    >
      {children}{" "}
    </Link>
  );
};

export default Button;
