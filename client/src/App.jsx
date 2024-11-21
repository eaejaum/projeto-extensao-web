import { useRef } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";


const App = () => {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Header scrollToProducts={scrollToProducts}/>
      <div ref={productsRef} style={{ marginTop: "2rem" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
