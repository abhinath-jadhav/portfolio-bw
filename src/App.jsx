import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Helmet from "react-helmet";
import favicon from "./assets/favicon.ico";

const App = () => {
  return (
    <div className=" bg-[#161617] text-lightColor h-screen">
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
