const Imagen = ({ svg, alt }) => {
  return (
    <img
      src={svg}
      width="50px"
      height="50px"
      alt={`Logo del icono ${alt}`}
      loading="lazy"
    />
  );
};
export default Imagen;
