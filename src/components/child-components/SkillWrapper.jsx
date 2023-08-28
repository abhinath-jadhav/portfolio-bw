import React from "react";
import SkillCard from "./SkillCard";

const SkillWrapper = (props) => {
  return (
    <div className="border-lightColor border p-6 gap-5 flex flex-col items-center rounded-xl md:w-[375px] lg:w-[500px] text-white">
      <div className="">
        <h1 className="text-4xl">{props.title}</h1>
      </div>
      <div className="grid grid-cols-2">
        {props.skills.map((element, index) => (
          <div key={index} className="flex p-2 border-lightColor">
            <SkillCard icon={element.icon} skill={element.skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillWrapper;
