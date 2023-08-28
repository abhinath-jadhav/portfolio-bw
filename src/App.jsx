import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TypingComponent from "./components/child-components/Typed";

const App = () => {
  return (
    <div className=" bg-[#161617] text-lightColor h-screen">
      <NavBar />
      <Home />
      <TypingComponent />
    </div>
  );
};

export default App;
