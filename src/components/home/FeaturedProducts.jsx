import ProductCard from '../common/ProductCard';
import { products } from '../../data/products';

const FeaturedProducts = () => {
  const featured = products.slice(0, 4);
  
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {featured.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;