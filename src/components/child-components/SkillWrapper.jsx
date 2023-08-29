import React from "react";
import SkillCard from "./SkillCard";
import { useSelector } from "react-redux";

const SkillWrapper = (props) => {
  const darkTheme = useSelector((store) => store.darkTheme);
  return (
    <div
      className={`${
        darkTheme
          ? "bg-darkColor text-lightColor border-lightColor"
          : "bg-lightColor text-darkColor border-darkColor"
      }  border p-6 gap-5 flex flex-col items-center rounded-xl md:w-[375px] lg:w-[500px]`}
    >
      <div className="">
        <h1 className="text-4xl">{props.title}</h1>
      </div>
      <div className="grid grid-cols-2">
        {props.skills.map((element, index) => (
          <div key={index} className="flex p-2 border-lightColor">
            <SkillCard
              icon={element.icon}
              skill={element.skill}
              dark={darkTheme}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillWrapper;
