import { Link } from 'react-router-dom';

import color from '../assets/color.svg';
import icons from '../assets/icons.svg';
import animations from '../assets/animations.svg';
import spinners from '../assets/spinners.svg';
import htmlcss from '../assets/htmlcss.svg';
import Imagen from '../Components/Imagen';
import IndexColor from '../Components/IndexColor';

const Index = () => {
  return (
    <div className="grid md:grid-rows-2 items-center md:grid-cols-2 gap-4 px-2 md:px-5 pt-2 pb-10 mt-5">
      {/* Color */}
      <div className="flex items-center gap-2 py-2 md:py-5 bg-transparent border border-indigo-500 uppercase px-3 rounded-md">
        <Imagen svg={color} alt="icono colores" w="50" h="50" />
        <Link
          className="flex items-start flex-col md:text-3xl font-bold text-indigo-500"
          to="/category-colors/"
        >
          categoria de colores
          <span className="hidden md:block text-start text-gray-500 pl-1 text-xs lowercase font-thin capitalize">
            Generadores de colores, paletas de colores, etc
          </span>
        </Link>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-2 py-2 md:py-5 bg-transparent border border-indigo-500 uppercase px-3 rounded-md">
        <Imagen svg={icons} alt="logo iconos" w="50" h="50" />
        <Link
          className="flex items-start flex-col md:text-3xl font-bold text-indigo-500"
          to="/category-icons/"
        >
          categoria de iconos
          <span className="hidden md:block text-start text-gray-500 pl-1 text-xs font-thin capitalize">
            Bancos de iconos, gratis, open source, svg, etc
          </span>
        </Link>
      </div>

      {/* Animation */}
      <div className="flex items-center gap-2 py-2 md:py-5 bg-transparent border border-indigo-500 uppercase px-3 rounded-md">
        <Imagen svg={animations} alt="logo iconos" w="50" h="50" />
        <Link
          className="flex items-start flex-col md:text-3xl font-bold text-indigo-500"
          to="/category-animations/"
        >
          categoria de animaciones
          <span className="hidden md:block text-start text-gray-500 pl-1 text-xs font-thin capitalize">
            Generadores de css, paletas de colores, etc
          </span>
        </Link>
      </div>

      {/* Spinners */}
      <div className="flex items-center gap-2 py-2 md:py-5 bg-transparent border border-indigo-500 uppercase px-3 rounded-md">
        <Imagen svg={spinners} alt="logo spinners" w="50" h="50" />
        <Link
          className="flex items-start flex-col md:text-3xl font-bold text-indigo-500"
          to="/category-spinners/"
        >
          categoria de spinners
          <span className="hidden md:block text-start text-gray-500 pl-1 text-xs font-thin capitalize">
            Generadores de css, paletas de colores, etc
          </span>
        </Link>
      </div>

      {/* Html components */}
      <div className="flex items-center gap-2 py-2 md:py-5 bg-transparent border border-indigo-500 uppercase px-3 rounded-md">
        <Imagen svg={htmlcss} alt="logo html css componentes" w="50" h="50" />
        <Link
          className="flex items-start flex-col md:text-3xl font-bold text-indigo-500"
          to="/category-componentshtml/"
        >
          categoria de html/css
          <span className="hidden md:block text-start text-gray-500 pl-1 text-xs font-thin capitalize">
            Componentes de ccs, ej: botones, checkboxes, etc
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Index;
