const Rect = (props) => {
  const x = props.x;
  const y = props.y;
  const width = props.w;
  const height = props.h;
  const color = props.c;
  const radius = props.r;

  const rectStyle = {
    backgroundColor: color,
    position: 'absolute',
    left: x + 'px',
    top: y + 'px',
    width: width + 'px',
    height: height + 'px',
    borderRadius: radius + 'px',
  };

  return <div style={rectStyle}></div>;
};

export default Rect;
