import { dataColores } from '../data/data';
import CategoryCard from '../Components/CategoryCard';
import HeaderCategories from '../Components/HeaderCategories';

const CategoryColors = () => {
  return (
    <section className="container mx-auto p-2 mb-5">
      <HeaderCategories heading="categoria colores" />
      {dataColores.map((data) => (
        <CategoryCard
          key={data.id}
          title={data.title}
          urlPage={data.urlPage}
          description={data.description}
          urlTweet={data.urlTweet}
        />
      ))}
    </section>
  );
};

export default CategoryColors;
