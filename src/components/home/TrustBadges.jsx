const TrustBadges = () => {
  const badges = [
    { icon: '🚚', text: 'Free Shipping' },
    { icon: '🔒', text: 'Secure Payment' },
    { icon: '🔄', text: 'Easy Returns' },
    { icon: '⭐', text: '24/7 Support' }
  ];

  return (
    <div className="trust-badges">
      {badges.map((badge, index) => (
        <div key={index} className="trust-badge">
          <div className="icon">{badge.icon}</div>
          <p>{badge.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;