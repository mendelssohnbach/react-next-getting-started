const Rect = ({ x, y, w, h, c, r }) => {
  const width = w;
  const height = h;
  const color = c;
  const radius = r;

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
