const HeaderCategories = ({ heading }) => {
  return (
    <h3 className="md:w-10/12 mx-auto text-indigo-500 font-bold text-center text-lg uppercase md:text-2xl px-5 py-2 rounded-md shadow shadow-indigo-700 mb-10">
      {heading}
    </h3>
  );
};

export default HeaderCategories;
