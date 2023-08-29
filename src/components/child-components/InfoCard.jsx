import React from "react";
import { useSelector } from "react-redux";

const InfoCard = (props) => {
  const darkTheme = useSelector((store) => store.darkTheme);
  return (
    <div
      className={`${
        darkTheme
          ? "bg-darkColor text-lightColor border-lightColor"
          : "bg-lightColor text-darkColor border-darkColor"
      } w-full rounded-xl border md:hover:scale-110`}
    >
      <div className="flex gap-2 flex-col text-center justify-center items-center p-5 md:p-10">
        <div>{props.icon}</div>
        <div className="text-2xl font-semibold">{props.title}</div>
        <div className="text-lg">{props.info}</div>
      </div>
    </div>
  );
};

export default InfoCard;
