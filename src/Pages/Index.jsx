import IndexCategoria from '../Components/IndexCategoria';
import color from '../assets/color.svg';
import icons from '../assets/icons.svg';
import animations from '../assets/animations.svg';
import spinners from '../assets/spinners.svg';
import htmlcss from '../assets/htmlcss.svg';

const Index = () => {
  return (
    <div className="grid md:grid-rows-2 items-center md:grid-cols-2 gap-4 px-2 md:px-5 pt-2 pb-10 mt-5">
      {/* Color */}
      <IndexCategoria
        go="/category-colors/"
        categoria="colores"
        description="Generadores de colores, paletas de colores, etc"
        img={color}
      />

      {/* Icons */}
      <IndexCategoria
        go="/category-icons/"
        categoria="Iconos"
        description="Bancos de iconos, gratis, open source, svg, etc"
        img={icons}
      />

      {/* Animation */}
      <IndexCategoria
        go="/category-animations/"
        categoria="animaciones"
        description="Animaciones para componentes, y más"
        img={animations}
      />

      {/* Spinners */}
      <IndexCategoria
        go="/category-spinners/"
        categoria="spinners"
        description="banco de spinners y loaders"
        img={spinners}
      />

      {/* Html components */}
      <IndexCategoria
        go="/category-componentshtml/"
        categoria="html/css"
        description="Componentes de ccs, ej: botones, checkboxes, etc"
        img={htmlcss}
      />
    </div>
  );
};

export default Index;
