import link from '../assets/externalLink.svg';
import Imagen from './Imagen';

const CategoryCard = ({ title, urlPage, description, urlTweet }) => {
  return (
    <div className="bg-slate-800 rounded-md px-2 py-2 my-5 shadow shadow-slate-500 md:w-10/12 mx-auto">
      <h3 className="text-center py-2 uppercase text-xl md:text-2xl text-indigo-500 font-extrabold">
        {title}
      </h3>

      <div className="text-slate-300 font-bold p-5 rounded-md">
        <p className="w-full tracking-normal mb-3 text-base md:text-lg">
          {description}
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 items-center font-bold">
          <a
            href={urlPage}
            target="_blank"
            className="md:text-xl uppercase flex justify-center gap-2 bg-slate-600 rounded p-2 hover:bg-slate-700 hover:text-slate-400 ease-in-out duration-200"
          >
            {`Visita a ${title}`}
            <Imagen w="25" h="25" svg={link} alt="link" sty="-mt-1" />
          </a>

          <a
            href={urlTweet}
            target="_blank"
            className="md:text-xl uppercase flex justify-center gap-2 bg-slate-600 rounded p-2 hover:bg-slate-700 hover:text-slate-400 ease-in-out duration-200"
          >
            Tweet
            <Imagen w="25" h="25" svg={link} alt="link" sty="-mt-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
