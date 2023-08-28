import React from "react";

const InfoCard = (props) => {
  return (
    <div className="w-full rounded-xl border border-lightColor md:hover:scale-110">
      <div className="flex gap-2 flex-col text-center justify-center items-center p-5 md:p-10">
        <div>{props.icon}</div>
        <div className="text-2xl font-semibold">{props.title}</div>
        <div className="text-lg">{props.info}</div>
      </div>
    </div>
  );
};

export default InfoCard;
