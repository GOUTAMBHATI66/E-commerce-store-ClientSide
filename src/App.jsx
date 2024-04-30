import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Electronics from "./components/Electronic";
import Home from "./components/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import SingleProduct from "./components/SingleProduct";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./utils/context";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import CheckOut from "./components/CheckOut";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <div className=" bg-white dark:bg-gray-900 dark:text-white duration-200">
        <AppContext>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route
              path="/:category/:product/:id/:title"
              element={<SingleProduct />}
            />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
          <Footer />
        </AppContext>
      </div>
    </BrowserRouter>
  );
};

export default App;
