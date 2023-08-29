import React from "react";
import Button from "./child-components/Button";
import InfoCard from "./child-components/InfoCard";
import Typed from "react-typed";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import { useSelector } from "react-redux";

const Home = () => {
  const darkTheme = useSelector((store) => store.darkTheme);
  return (
    <div
      name="home"
      className={`${
        darkTheme
          ? "bg-darkColor text-lightColor"
          : "bg-lightColor text-darkColor"
      } max-w-[1440px] mx-auto h-screen flex justify-center flex-col px-4`}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          {/* <p className="font-[600] my-1"> Hello, I'm</p> */}
          <h1 className="text-center font-[600] text-5xl my-1">
            Abhinath Jadhav
          </h1>
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-[600] text-2xl my-1 border-b-2 border-collapse border-lightColor pb-2">
              Fullstack Developer
            </h3>
            <Typed
              className=" text-pink-400 text-2xl pl-2"
              strings={[
                "Java",
                "Typescript",
                "Javascript",
                "Springboot",
                "React",
                "NextJS",
                "Redux",
                "Kafka",
                "Docker",
                "MongoDB",
                "MS SQL Server",
              ]}
              typeSpeed={80}
              backSpeed={150}
              loop
            />
          </div>
        </div>

        <div className="flex gap-3 mt-10">
          <Button dark title="Download CV" width="135px" />
          <Button title="Contact Info" width="135px" />
        </div>

        <div className="flex gap-3 md:gap-10 mt-20">
          <InfoCard
            title="Experiance"
            info="3+ Year Fullstack Development"
            icon={<HiOutlineDesktopComputer size={40} />}
          />
          <InfoCard
            title="Education"
            info="Becholors In Aeronautical Engineering"
            icon={<MdSchool size={40} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
