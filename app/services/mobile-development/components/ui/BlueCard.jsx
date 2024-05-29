import React from "react";

function BlueCard(props) {
  return (
    <div className="w-full h-[12rem] bg-[#e9f0fe] rounded-[24px] p-5">
      <div>
        <span className="uppercase tracking-[1.5px] text-[14px]">
          {props.category}
        </span>
      </div>
      <div>
        <h1 className="text-[24px] font-medium my-2">{props.title}</h1>
        <p className="text-[16px]">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default BlueCard;
