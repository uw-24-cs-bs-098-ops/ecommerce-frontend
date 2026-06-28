const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>📧 Subscribe to Our Newsletter</h2>
      <p>Get the latest updates on new products and upcoming sales</p>
      <div className="newsletter-form">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;