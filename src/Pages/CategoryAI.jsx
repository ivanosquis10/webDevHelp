import { dataAI } from '../data/data'
import CategoryCard from '../Components/CategoryCard'
import HeaderCategories from '../Components/HeaderCategories'

const CategoryAI = () => {
  return (
    <section className="container mx-auto p-2 mb-5">
      <HeaderCategories heading="categoria AI" />
      {dataAI.map((data) => (
        <CategoryCard
          key={data.id}
          title={data.title}
          urlPage={data.urlPage}
          description={data.description}
          urlTweet={data.urlTweet}
        />
      ))}
    </section>
  )
}

export default CategoryAI
