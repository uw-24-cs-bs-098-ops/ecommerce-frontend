import { categories } from '../../data/products';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h4>Category</h4>
      <select 
        value={selectedCategory || ''}
        onChange={(e) => onCategoryChange(e.target.value)}
        style={{
          width: '100%',
          padding: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '8px',
          marginTop: '0.5rem'
        }}
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;