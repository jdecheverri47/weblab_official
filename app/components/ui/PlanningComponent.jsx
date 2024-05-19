import React from "react";

function PlanningComponent({title, number, text, icon}) {
  return (
    <div className="flex text-scroll">
      <div className="w-8 h-8 pt-2 mr-5">{icon}</div>
      <div className="lg:max-w-[80%] w-full ">
        <div className="flex justify-between pb-2 lg:pb-5">
          <div>
            <h1 className="text-[24px] lg:text-[32px] font-medium">{title}</h1>
          </div>
          <div>
            <h1 className="text-[20px] lg:text-2xl">{number}</h1>
          </div>
        </div>
        <div>
          <p>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlanningComponent;
