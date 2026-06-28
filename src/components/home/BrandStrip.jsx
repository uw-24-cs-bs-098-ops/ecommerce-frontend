const BrandStrip = () => {
  const brands = [
    { name: 'Nike', icon: '👟' },
    { name: 'Apple', icon: '🍎' },
    { name: 'Samsung', icon: '📱' },
    { name: 'Adidas', icon: '👕' },
    { name: 'Sony', icon: '🎮' },
    { name: 'Microsoft', icon: '💻' }
  ];

  return (
    <section className="brand-strip">
      <h3>Trusted by Leading Brands</h3>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-item">
            <span>{brand.icon}</span>
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandStrip;