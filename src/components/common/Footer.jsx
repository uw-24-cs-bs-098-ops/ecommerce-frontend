const Footer = () => {
  return (
    <footer className="bg-[#111827] border-t border-[#1f2937] py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">🛍️ ShopEase</h3>
            <p className="text-gray-400 text-sm">Your one-stop shop for all your needs.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Electronics</a></li>
              <li><a href="#" className="hover:text-white transition">Clothing</a></li>
              <li><a href="#" className="hover:text-white transition">Shoes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-white transition text-2xl">📘</a>
              <a href="#" className="hover:text-white transition text-2xl">🐦</a>
              <a href="#" className="hover:text-white transition text-2xl">📸</a>
            </div>
            <p className="mt-4 text-sm text-gray-500">© 2026 ShopEase. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;