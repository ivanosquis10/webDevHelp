import { Link } from 'react-router-dom';
import Imagen from '../Components/Imagen';

const IndexCategoria = ({ go, categoria, description, img }) => {
  return (
    <div className="flex items-center gap-2 py-2 md:py-5 bg-transparent border border-indigo-500 uppercase px-3 rounded-md">
      <Imagen svg={img} alt="icono colores" w="50" h="50" />
      <Link
        className="flex items-start flex-col md:text-3xl font-bold text-indigo-500"
        to={go}
      >
        {`categoria de ${categoria}`}
        <span className="hidden md:block text-start text-gray-500 pl-1 text-xs lowercase font-thin capitalize">
          {description}
        </span>
      </Link>
    </div>
  );
};

export default IndexCategoria;
