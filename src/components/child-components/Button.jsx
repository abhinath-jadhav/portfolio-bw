import React from "react";

const Button = (props) => {
  const darkStyle = "text-lightColor bg-darkColor border border-lightColor";
  const lightStyle = "bg-lightColor border border-black text-darkColor";
  const defaultWidth = "130px";

  const hoverDark =
    "hover:bg-darkColor hover:border hover:border-lightColor hover:text-lightColor";
  const hoverLight =
    "hover:text-darkColor hover:border bg:border-darkColor hover:bg-lightColor";

  return (
    <div>
      <button
        className={`${
          props.dark ? darkStyle : lightStyle
        } rounded-[2rem] text-[14px] font-semibold p-4 w-[${
          props.width ? props.width : defaultWidth
        }] ${props.dark ? hoverLight : hoverDark} shadow`}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
