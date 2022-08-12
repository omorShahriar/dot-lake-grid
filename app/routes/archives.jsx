import { Outlet } from "@remix-run/react";
import Button from "~/components/Button";

export default function Archives() {
  return (
    <div>
      <section className=" bg-blend-overlay bg-black/40 bg-[url(/archives-hero.png)] bg-cover bg-center  ">
        <div className="flex items-center justify-center pt-96 pb-72">
          <h1 className=" text-white text-9xl text-center ">Archives</h1>
        </div>
      </section>
      <section>
        <div className=" flex justify-center items-center py-24 ">
          <Button to="images" normal={false}>
            Images
          </Button>
          <Button to="audio" normal={false}>
            Audio
          </Button>
        </div>
        <div>
          <Outlet />
        </div>
      </section>
    </div>
  );
}
