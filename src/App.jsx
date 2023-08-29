import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Helmet from "react-helmet";
import favicon from "./assets/favicon.ico";
import { useSelector } from "react-redux";

const App = () => {
  const darkTheme = useSelector((store) => store.darkTheme);
  return (
    <div
      className={`${
        darkTheme
          ? "bg-darkColor text-lightColor"
          : "bg-lightColor text-darkColor"
      }h-screen text-darkColor2`}
    >
      <Helmet>
        <title>Abhinath-Jadhav</title>
        <link rel="icon" type="image/ico" href={favicon} />
      </Helmet>
      <NavBar className="z-20" />
      <Home />
      <Skills />
      <Home />
    </div>
  );
};

export default App;
