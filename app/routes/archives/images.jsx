import { Container } from "~/components/Container";

const dataLeft = [
  { src: "/gl-1.jpg", alt: "rand1" },
  { src: "/gl-2.jpg", alt: "rand2" },
  { src: "/gl-3.jpg", alt: "rand3" },
  { src: "/gl-4.jpg", alt: "rand4" },
];
const dataRight = [
  { src: "/gr-1.jpg", alt: "rand5" },
  { src: "/gr-2.jpg", alt: "rand6" },
  { src: "/gr-3.jpg", alt: "rand7" },
  { src: "/gr-4.jpg", alt: "rand8" },
];

const images = () => {
  return (
    <div className=" mt-10 ">
      <Container>
        <div className=" grid grid-cols-12 gap-x-4 ">
          <div className=" col-span-7 px-12 flex flex-col gap-y-12">
            {dataLeft.map((image, i) => (
              <img src={image.src} alt={image.alt} key={i} />
            ))}
          </div>
          <div className=" col-span-5 pl-3 pr-11 mt-20 flex flex-col gap-y-12 ">
            {dataRight.map((image, i) => (
              <img src={image.src} alt={image.alt} key={i} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default images;
