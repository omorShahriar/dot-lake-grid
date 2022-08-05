import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className=" mt-44 ">{children}</main>
    </>
  );
};

export default Layout;
