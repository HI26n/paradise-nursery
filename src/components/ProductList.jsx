import { useSelector, useDispatch } from 'react-redux';
import Header from './Header.jsx';
import PlantIcon from './PlantIcon.jsx';
import plantsData from '../data/plantsData.js';
import { addItem } from '../redux/CartSlice.jsx';
import './ProductList.css';

// One category section: a heading plus a grid of plant cards.
function CategorySection({ category, plants, cartIds, onAdd }) {
  return (
    <section className="pl-category" aria-labelledby={`cat-${category}`}>
      <h2 id={`cat-${category}`} className="pl-category-title">
        {category}
      </h2>
      <div className="pl-grid">
        {plants.map((plant) => {
          const inCart = cartIds.has(plant.id);
          return (
            <article className="pl-card" key={plant.id}>
              <div className="pl-thumb">
                <PlantIcon {...plant.icon} size={110} />
              </div>
              <h3 className="pl-name">{plant.name}</h3>
              <p className="pl-desc">{plant.description}</p>
              <div className="pl-tag">${plant.price.toFixed(2)}</div>
              <button
                type="button"
                className="pl-add-btn"
                disabled={inCart}
                onClick={() => onAdd(plant)}
              >
                {inCart ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartIds = new Set(cartItems.map((item) => item.id));

  const handleAdd = (plant) => {
    dispatch(
      addItem({
        id: plant.id,
        name: plant.name,
        price: plant.price,
        icon: plant.icon,
      })
    );
  };

  return (
    <div className="pl-page">
      <Header />
      <main className="pl-content">
        <h1 className="pl-heading">Shop Houseplants</h1>
        <p className="pl-sub">Every plant below ships potted, labeled, and ready to grow.</p>

        {plantsData.map(({ category, plants }) => (
          <CategorySection
            key={category}
            category={category}
            plants={plants}
            cartIds={cartIds}
            onAdd={handleAdd}
          />
        ))}
      </main>
    </div>
  );
}
