import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="main">
      <Navbar />
      { children }
    </div>
  );
};

export default Layout;
