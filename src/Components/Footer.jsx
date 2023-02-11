import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-3 mt-5 mb-5 pb-5">
      <div className="tracking-tighter text-base">
        Made by{' '}
        <a
          href="https://twitter.com/ivanosquis13"
          target="_blank"
          className=" rounded-md p-1 text-indigo-500 font-bold border border-indigo-600 border-dashed hover:bg-slate-800 hover:text-indigo-500 hover:ease-in-out hover:duration-300 "
        >
          @Ivanosquis13
        </a>
      </div>
      <div className="flex items-center gap-1">
        <a
          href="https://github.com/ivanosquis10"
          target="_blank"
          className="hover:shadow-xl hover:shadow-black rounded hover:ease-in-out hover:duration-300 p-1"
        >
          <img
            width="30px"
            height="30px"
            src={github}
            alt="logo de github"
            loading="lazy"
          />
        </a>

        <a
          href="https://twitter.com/ivanosquis13"
          target="_blank"
          className="hover:shadow-xl hover:shadow-black rounded hover:ease-in-out hover:duration-300 p-1"
        >
          <img
            width="30px"
            height="30px"
            src={twitter}
            alt="logo de github"
            loading="lazy"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
