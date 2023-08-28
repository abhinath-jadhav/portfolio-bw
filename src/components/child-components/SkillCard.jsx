import React from "react";

const SkillCard = (props) => {
  return (
    <div className="flex gap-3 p-3 items-center bg-lightColor border border-black text-darkColor rounded-[2rem] w-[155px] hover:bg-darkColor2 hover:border hover:border-lightColor hover:text-lightColor duration-300 hover:scale-105">
      <div>{props.icon}</div>
      <div className="hover:text-lightColor text-[16px] font-semibold ">
        {props.skill}
      </div>
    </div>
  );
};

export default SkillCard;
