export const products = [
  // ===== ELECTRONICS =====
  {
    id: 1,
    name: 'Wireless Noise-Cancelling Headphones',
    price: 99.99,
    discount: 20,
    isNew: true,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear audio quality. Perfect for travel and daily use.',
    rating: 4.8,
    reviews: 342,
    inStock: true,
    colors: ['Black', 'Silver', 'Blue']
  },
  {
    id: 2,
    name: 'Smart Fitness Watch Series 8',
    price: 199.99,
    isNew: true,
    isBestSeller: true,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    description: 'Advanced smartwatch with heart rate monitor, GPS, ECG, blood oxygen tracking, and 7-day battery life. Compatible with iOS and Android.',
    rating: 4.9,
    reviews: 567,
    inStock: true,
    colors: ['Black', 'Rose Gold', 'Graphite']
  },
  {
    id: 3,
    name: 'USB-C 7-in-1 Hub Adapter',
    price: 29.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400',
    description: 'Versatile USB-C hub with HDMI 4K, 3 USB 3.0 ports, SD/TF card readers, and 100W power delivery. Ideal for MacBook, Dell XPS, and more.',
    rating: 4.5,
    reviews: 189,
    inStock: true,
    colors: ['Silver', 'Space Gray']
  },
  {
    id: 4,
    name: 'Wireless Bluetooth Earbuds Pro',
    price: 79.99,
    discount: 10,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400',
    description: 'True wireless earbuds with active noise cancellation, IPX5 waterproof rating, and 24-hour battery life with charging case. Studio-quality sound.',
    rating: 4.7,
    reviews: 423,
    inStock: true,
    colors: ['White', 'Black', 'Purple']
  },
  {
    id: 5,
    name: '4K Action Camera Adventure Kit',
    price: 149.99,
    isNew: true,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400',
    description: 'Waterproof action camera with 4K60fps video, 20MP photos, built-in stabilization, and 32 accessories included. Perfect for extreme sports.',
    rating: 4.6,
    reviews: 278,
    inStock: true,
    colors: ['Black', 'Red']
  },

  // ===== FASHION =====
  {
    id: 6,
    name: 'Classic Leather Backpack',
    price: 49.99,
    discount: 15,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    description: 'Vintage-style leather backpack with multiple compartments, padded laptop sleeve, and adjustable straps. Durable and stylish for daily use.',
    rating: 4.4,
    reviews: 156,
    inStock: true,
    colors: ['Brown', 'Black', 'Tan']
  },
  {
    id: 7,
    name: "Men's Slim Fit Polo Shirt",
    price: 34.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400',
    description: 'Classic polo shirt made from premium cotton blend. Slim fit, breathable fabric, and available in 10+ colors. Perfect for casual and business casual.',
    rating: 4.3,
    reviews: 312,
    inStock: true,
    colors: ['Navy', 'White', 'Black', 'Red', 'Blue']
  },
  {
    id: 8,
    name: "Women's Running Sneakers",
    price: 89.99,
    isBestSeller: true,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    description: 'Lightweight running shoes with cushioned sole, breathable mesh upper, and responsive foam for maximum comfort. Ideal for running and gym workouts.',
    rating: 4.7,
    reviews: 245,
    inStock: true,
    colors: ['White/Pink', 'Black/White', 'Blue/Silver']
  },
  {
    id: 9,
    name: 'Cashmere Blend Scarf',
    price: 29.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c5?w=400',
    description: 'Luxurious cashmere blend scarf with classic plaid pattern. Soft, warm, and perfect for fall and winter fashion. Unisex design.',
    rating: 4.2,
    reviews: 98,
    inStock: true,
    colors: ['Red/Black', 'Navy/Yellow', 'Gray/White']
  },
  {
    id: 10,
    name: 'Designer Sunglasses Aviator',
    price: 159.99,
    discount: 25,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
    description: 'Premium aviator sunglasses with polarized lenses and gold-tone metal frame. 100% UV protection, scratch-resistant, and lightweight.',
    rating: 4.8,
    reviews: 167,
    inStock: true,
    colors: ['Gold/Black', 'Silver/Brown']
  },

  // ===== HOME & LIVING =====
  {
    id: 11,
    name: 'Modern LED Desk Lamp',
    price: 39.99,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
    description: 'Adjustable LED desk lamp with 5 brightness levels, 3 color temperatures, and built-in USB charging port. Eye-caring, flicker-free light.',
    rating: 4.5,
    reviews: 289,
    inStock: true,
    colors: ['White', 'Black']
  },
  {
    id: 12,
    name: 'Kitchen Pro Mixer Stand',
    price: 199.99,
    isBestSeller: true,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1593941707882-7bcf1d87e45f?w=400',
    description: 'Professional 5-quart stand mixer with 10-speed control, 4 attachments, and tilt-head design. Perfect for baking, cooking, and meal prep.',
    rating: 4.9,
    reviews: 534,
    inStock: true,
    colors: ['Silver', 'Red', 'Blue', 'Teal']
  },
  {
    id: 13,
    name: 'Memory Foam Pillow Set',
    price: 59.99,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400',
    description: 'Ergonomic memory foam pillows with cooling gel layer. Adjustable height, hypoallergenic cover, and machine washable. Comfortable sleep guaranteed.',
    rating: 4.6,
    reviews: 412,
    inStock: true,
    colors: ['White', 'Gray']
  },
  {
    id: 14,
    name: 'Ceramic Non-Stick Cookware Set',
    price: 129.99,
    discount: 30,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1584990347749-8b87e4e7a9d6?w=400',
    description: '12-piece ceramic non-stick cookware set including frying pans, saucepans, and lids. PTFE-free, dishwasher safe, and even heat distribution.',
    rating: 4.7,
    reviews: 389,
    inStock: true,
    colors: ['Black', 'Turquoise', 'Cream']
  },
  {
    id: 15,
    name: 'Smart Home Security Camera',
    price: 89.99,
    isNew: true,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1557324232-a6917b50a012?w=400',
    description: '1080p HD indoor security camera with night vision, motion detection, two-way audio, and smartphone app control. Compatible with Alexa and Google Home.',
    rating: 4.4,
    reviews: 234,
    inStock: true,
    colors: ['White']
  },

  // ===== BEAUTY & WELLNESS =====
  {
    id: 16,
    name: 'Luxury Skincare Gift Set',
    price: 79.99,
    isNew: true,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400',
    description: 'Complete skincare set with cleanser, toner, serum, moisturizer, and eye cream. Formulated with natural ingredients, suitable for all skin types.',
    rating: 4.8,
    reviews: 456,
    inStock: true,
    colors: ['Pink/Gold']
  },
  {
    id: 17,
    name: 'Professional Hair Dryer',
    price: 99.99,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=400',
    description: 'Professional ionic hair dryer with 3 heat settings, 2 speed settings, and cool shot button. Reduces frizz and speeds up drying time.',
    rating: 4.6,
    reviews: 289,
    inStock: true,
    colors: ['Rose Gold', 'Silver', 'Black']
  },
  {
    id: 18,
    name: 'Essential Oil Diffuser Set',
    price: 44.99,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1602874801007-bd36b147a5e4?w=400',
    description: 'Ultrasonic aromatherapy diffuser with 7 color-changing lights and 6 essential oils included. Creates a calming atmosphere, runs up to 12 hours.',
    rating: 4.5,
    reviews: 234,
    inStock: true,
    colors: ['Wood Grain', 'White']
  },
  {
    id: 19,
    name: 'Organic Bath Bombs Set',
    price: 24.99,
    discount: 20,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=400',
    description: 'Set of 12 organic bath bombs in assorted scents. Made with essential oils, shea butter, and natural colors. Perfect gift for relaxation and self-care.',
    rating: 4.3,
    reviews: 178,
    inStock: true,
    colors: ['Multi-color']
  },

  // ===== SPORTS & OUTDOORS =====
  {
    id: 20,
    name: 'Camping Tent 4-Person',
    price: 149.99,
    isBestSeller: true,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400',
    description: 'Spacious 4-person camping tent with waterproof design, UV protection, and easy setup. Includes carrying bag, stakes, and rainfly.',
    rating: 4.7,
    reviews: 345,
    inStock: true,
    colors: ['Green', 'Orange', 'Blue']
  },
  {
    id: 21,
    name: 'Yoga Mat Premium',
    price: 29.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400',
    description: 'Non-slip yoga mat with alignment lines. Made from eco-friendly materials, 6mm thickness for joint protection, and includes carrying strap.',
    rating: 4.4,
    reviews: 289,
    inStock: true,
    colors: ['Purple', 'Teal', 'Black', 'Mint']
  },
  {
    id: 22,
    name: 'Fitness Resistance Bands Set',
    price: 19.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400',
    description: 'Set of 5 resistance bands with different resistance levels. Includes handles, door anchor, and ankle straps. Perfect for home workouts and physical therapy.',
    rating: 4.6,
    reviews: 567,
    inStock: true,
    colors: ['Multi-color']
  },
  {
    id: 23,
    name: 'Insulated Water Bottle 32oz',
    price: 34.99,
    isNew: true,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
    description: 'Stainless steel insulated water bottle with double-wall vacuum insulation. Keeps drinks cold for 24 hours or hot for 12 hours. BPA-free with straw lid.',
    rating: 4.8,
    reviews: 456,
    inStock: true,
    colors: ['Black', 'White', 'Blue', 'Green', 'Pink']
  },

  // ===== TOYS & GAMES =====
  {
    id: 24,
    name: 'Strategy Board Game Classic',
    price: 39.99,
    isBestSeller: true,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400',
    description: 'Award-winning strategy board game for 2-4 players. Includes game board, pieces, cards, and instructions. Promotes critical thinking and social interaction.',
    rating: 4.9,
    reviews: 678,
    inStock: true,
    colors: ['Multi-color']
  },
  {
    id: 25,
    name: 'Wooden Building Blocks Set',
    price: 49.99,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400',
    description: '100-piece wooden building blocks set with different shapes and colors. Encourages creativity, fine motor skills, and spatial awareness. For ages 3+',
    rating: 4.7,
    reviews: 389,
    inStock: true,
    colors: ['Multi-color']
  },
  {
    id: 26,
    name: 'Remote Control Car Off-Road',
    price: 59.99,
    discount: 15,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=400',
    description: 'High-speed remote control car with off-road tires and rechargeable battery. 2.4GHz frequency for stable control, reaches speeds up to 20mph.',
    rating: 4.5,
    reviews: 234,
    inStock: true,
    colors: ['Red', 'Blue', 'Green']
  },
  {
    id: 27,
    name: 'STEM Learning Robot Kit',
    price: 79.99,
    isNew: true,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400',
    description: 'Educational robot building kit with 12-in-1 design. Teaches coding, engineering, and robotics. Includes app control and voice command features.',
    rating: 4.8,
    reviews: 412,
    inStock: true,
    colors: ['White/Blue']
  },

  // ===== BOOKS =====
  {
    id: 28,
    name: 'Bestseller Fiction Novel',
    price: 14.99,
    isBestSeller: true,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
    description: 'International bestselling novel with gripping plot and unforgettable characters. 400+ pages of captivating storytelling.',
    rating: 4.9,
    reviews: 2345,
    inStock: true,
    colors: ['Hardcover']
  },
  {
    id: 29,
    name: 'Cookbook: Healthy Recipes',
    price: 24.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
    description: 'Comprehensive cookbook with 200+ healthy and delicious recipes. Includes meal prep guides, nutritional information, and stunning food photography.',
    rating: 4.7,
    reviews: 876,
    inStock: true,
    colors: ['Paperback']
  },
  {
    id: 30,
    name: 'Self-Development Bestseller',
    price: 19.99,
    discount: 10,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
    description: 'Transformational self-development book with practical exercises and life-changing strategies. Based on years of research and real-world experience.',
    rating: 4.8,
    reviews: 1456,
    inStock: true,
    colors: ['Hardcover', 'Paperback']
  }
];

// Get unique categories
export const categories = [...new Set(products.map(p => p.category))];

// Get unique colors
export const allColors = [...new Set(products.flatMap(p => p.colors || []))];