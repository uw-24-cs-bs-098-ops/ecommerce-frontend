import { categories } from '../../data/products';
import { useSearch } from '../../context/SearchContext';

const FilterSidebar = ({ selectedCategory, onCategoryChange }) => {
  const { clearSearch } = useSearch();

  const handleClearAll = () => {
    onCategoryChange('');
    clearSearch();
  };

  return (
    <aside style={{
      padding: '1.5rem',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
      position: 'sticky',
      top: '100px',
      height: 'fit-content'
    }}>
      <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>🔍 Filters</h3>
      
      {/* Category Filter */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={{ marginBottom: '0.5rem' }}>Category</h4>
        <select
          value={selectedCategory || ''}
          onChange={(e) => onCategoryChange(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '0.95rem'
          }}
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4>Price Range</h4>
        <input type="range" min="0" max="500" style={{ width: '100%', marginTop: '0.5rem' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666' }}>
          <span>$0</span>
          <span>$500</span>
        </div>
      </div>

      {/* Rating */}
      <div>
        <h4>Rating</h4>
        <label style={{ display: 'block', marginTop: '0.3rem' }}>
          <input type="checkbox" /> ★★★★★ (4.5+)
        </label>
        <label style={{ display: 'block', marginTop: '0.3rem' }}>
          <input type="checkbox" /> ★★★★☆ (4.0+)
        </label>
        <label style={{ display: 'block', marginTop: '0.3rem' }}>
          <input type="checkbox" /> ★★★☆☆ (3.5+)
        </label>
      </div>

      {/* Clear All Filters */}
      <button 
        onClick={handleClearAll}
        style={{
          width: '100%',
          padding: '0.6rem',
          marginTop: '1.5rem',
          background: '#6C63FF',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Clear All Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;