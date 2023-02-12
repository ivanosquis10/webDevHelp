const Imagen = ({ svg, alt, w, h, sty='' }) => {
  return (
    <img
      src={svg}
      width={`${w}px`}
      height={`${h}px`}
      alt={`Logo del icono ${alt}`}
      loading="lazy"
      className={`${sty}`}
    />
  );
};
export default Imagen;
