const Categories = () => {
  const categories = [
    { name: 'Electronics', icon: '📱', bg: '#e8f4fd', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200' },
    { name: 'Fashion', icon: '👗', bg: '#fde8e8', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=200' },
    { name: 'Home & Living', icon: '🏠', bg: '#e8fde8', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200' },
    { name: 'Beauty', icon: '💄', bg: '#fde8f5', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200' }
  ];
  
  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} className="category-bg" />
            <div className="category-content">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>Shop Now →</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;