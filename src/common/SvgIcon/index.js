const SvgIcon = ({ src, width, height }) => (
  <img src={process.env.PUBLIC_URL + `/img/svg/${src}`} alt={src} width={width} height={height} />
);

export default SvgIcon;
