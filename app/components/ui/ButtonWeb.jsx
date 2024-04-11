"use client";

import styles from "../../styles/ButtonWeb.module.css";
import { useState, useRef } from "react";

function ButtonWeb(props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [background, setBackground] = useState("");
  const buttonRef = useRef(null);

  const gradients = [
    "linear-gradient(to right, #f9d423 0%, #ff4e50 100%)",
    "linear-gradient(to right, #0acffe 0%, #495aff 100%)",
    "linear-gradient(-225deg, #7742B2 0%, #F180FF 52%, #FD8BD9 100%)",
    "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)"
  ];

  const handleMouseMove = (e) => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - buttonRect.left;
      const y = e.clientY - buttonRect.top;
      setMousePosition({ x, y });
    }
  };

  const changeBackground = () => {
    const randomGradient =
      gradients[Math.floor(Math.random() * gradients.length)];
    setBackground(randomGradient);
  };

  return (
    <a href={props.href}>
      <button
        ref={buttonRef}
        onMouseEnter={changeBackground}
        onMouseMove={handleMouseMove}
        onClick={props.onClick}
        className={`${styles.contact_button} ${props.shadow}`}
        style={{
          "--background": background,
          "--x": `${mousePosition.x}px`,
          "--y": `${mousePosition.y}px`,
          color: props.color,
          backgroundColor: props.backgroundColor,
          border: `${props.borderParams}`,
          width: props.width,
          height: props.height,
          margin: props.margin,
        }}
      >
        <span id={props.className} className={styles.button_text}>{props.text}</span>
        {props.children}
      </button>
    </a>
  );
}

export default ButtonWeb;
