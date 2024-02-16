
function Circle(props) {
  return (
    <div
      style={{
        width: "520px",
        height: "480px",
        borderRadius: "50%",
        filter: "blur(70px)",
        position: "absolute",
        bottom: props.bottom,
        left: props.left,
        right: props.right,
        top: props.top,
        zIndex: props.zIndex,
      }}
      className={props.color}
    />
  );
}

export default Circle;
