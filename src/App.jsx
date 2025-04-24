import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  const pathName = useLocation();

  // This effect runs whenever the path name changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
