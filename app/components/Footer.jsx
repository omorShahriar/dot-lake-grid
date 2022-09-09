import { Container } from "./Container";
import { LinkButton } from "./Button";
const Footer = () => {
  return (
    <>
      {" "}
      <section className=" lg:mb-44 mb-24 ">
        <Container>
          <div className="lg:mt-56 mt-36 flex items-center justify-center flex-col lg:flex-row ">
            <div className=" mb-12 lg:mb-0 pb-12 lg:pb-0 lg:pt-12  lg:pr-8 text-right lg:border-r-2 lg:border-r-black lg:border-b-0 border-b-2 border-b-black lg:mx-0 mx-4">
              <h2 className=" lg:text-right text-left max-w-xl  font-medium  lg:text-5xl text-[40px]  leading-tight    ">
                Share your Dot Lake Village Memories
              </h2>
            </div>
            <div className=" lg:pl-8 ">
              <p className="  mb-12 text-white   lg:mt-12  lg:mx-16 mx-4  text-xl lg:leading-10 leading-8   ">
                If you have any memory from Dot Lake Village that you would like
                to share, contact us: we are eager to share it with our people.
              </p>
              <div className=" lg:block lg:ml-16 flex items-center justify-center  ">
                <LinkButton to="https://hipaa.jotform.com/222507788889174">
                  Contact Us
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <footer className=" py-16 ">
        <div className=" flex flex-col items-center">
          <img src="/brand-logo.png" alt="logo" className=" w-20 mb-14" />
          <p className=" font-semibold text-xl mb-11 ">
            Dot Lake Village Council
          </p>
          <p className=" mb-8 text-xl">PO Box 70488, Fairbanks AK 99707</p>
          <div className=" text-xl flex justify-between mb-8 gap-x-9">
            <p className="  ">Phone: (907) 882-2695</p>
            <p className="  ">Fax: (907) 882-5558</p>
          </div>

          <p className=" text-xl">DLVCouncil@dotlakevillage.org</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
