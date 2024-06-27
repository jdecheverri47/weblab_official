"use client";

import "../../styles/backgroundSecond.scss";
import { useEffect, useRef } from "react";

function BackgroundSecond({ classnames }) {
 
  return (
    <div className={`gradient-bg ${classnames} relative z-0`}>
      <div className="filter-mobile"/>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1a"></div>
          <div className="g2a"></div>
          <div className="g3a"></div>
          <div className="g4a"></div>
          {/* <div className="g5"></div> */}
          {/* <div className="interactive" ref={interBubbleRef}></div> */}
        </div>
    </div>
  );
}

export default BackgroundSecond;
