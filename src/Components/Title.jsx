import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <header>
      <Link to="/">
        <h1 className="text-3xl pt-5 px-10 md:text-5xl text-center uppercase font-medium flex flex-col text-indigo-500 font-bold">
          Web DevHelp
          <span className="text-xs text-slate-300">recursos frontEnd</span>
        </h1>
      </Link>
    </header>
  );
};

export default Title;
