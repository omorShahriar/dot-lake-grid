import { addListener, launch } from "devtools-detector";
import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";
const NoDevTools = () => {
  const navigate = useNavigate();
  useEffect(() => {
    launch();
    addListener((isOpen) => {
      if (isOpen) {
        navigate("/oops");
        window.location.reload();
      }
    });
  }, []);

  return (
    <div className=" absolute -z-20 ">Dev tools access is restricted </div>
  );
};

export default NoDevTools;
