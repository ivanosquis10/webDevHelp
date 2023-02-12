import { dataSpinners } from '../data/data';
import CategoryCard from '../Components/CategoryCard';
import HeaderCategories from '../Components/HeaderCategories';

const CategorySpinners = () => {
  return (
    <section className="container mx-auto p-2 mb-5">
      <HeaderCategories heading="Categoria Spinners" />
      {dataSpinners.map((data) => (
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

export default CategorySpinners;
