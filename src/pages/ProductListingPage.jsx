import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ProductCard from '../components/common/ProductCard';
import FilterSidebar from '../components/products/FilterSidebar';
import { products } from '../data/products';
import { useState } from 'react';
import { useSearch } from '../context/SearchContext';

const ProductListingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('featured');
  const { searchQuery, setSearchQuery } = useSearch();

  // Filter products by category and search
  const filteredProducts = products.filter(product => {
    // Category filter
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      const matchName = product.name.toLowerCase().includes(query);
      const matchCategory = product.category.toLowerCase().includes(query);
      const matchDescription = product.description.toLowerCase().includes(query);
      return matchName || matchCategory || matchDescription;
    }
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'popular':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  // Handle clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div>
      <Header />
      <div style={{ 
        padding: '2rem 5%',
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        gap: '2rem'
      }}>
        <FilterSidebar 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <h1 style={{ fontSize: '1.8rem' }}>
                {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
              </h1>
              <p style={{ color: '#666' }}>
                Showing {sortedProducts.length} of {products.length} products
              </p>
              {searchQuery && (
                <button 
                  onClick={clearSearch}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#6C63FF',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    textDecoration: 'underline'
                  }}
                >
                  Clear Search ✕
                </button>
              )}
            </div>
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              style={{ 
                padding: '0.5rem', 
                borderRadius: '8px', 
                border: '1px solid #ddd',
                background: 'white'
              }}
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Popularity</option>
            </select>
          </div>

          {sortedProducts.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '4rem',
              background: '#f8f9fa',
              borderRadius: '12px'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
              <h2 style={{ marginBottom: '0.5rem' }}>No products found</h2>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                We couldn't find any products matching "{searchQuery}"
              </p>
              <button 
                onClick={clearSearch}
                className="cta-button"
                style={{ padding: '0.8rem 2rem' }}
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="products-grid">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListingPage;