const HeaderCategories = ({ heading }) => {
  return (
    <h3 className="bg-slate-700 w-fit mx-auto text-slate-300 font-medium text-center text-base uppercase md:text-2xl px-5 py-2 rounded-md shadow-md shadow-gray-500 mb-10">
      {heading}
    </h3>
  );
};

export default HeaderCategories;
