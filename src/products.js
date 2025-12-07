import db from "./config/db.js";
const products = [
  {
    name: "Puma Smash Sneakers",
    category: "sneakers",
    shortDesc: "shoes for men",
    longDesc:
      "These Puma Smash Sneakers are designed for everyday comfort and style, featuring a smooth outsole and premium upper material. The shoe’s cushioned footbed ensures a soft landing with every step, reducing impact on your feet during long walks. Its classic design makes it versatile enough to pair with casual outfits or sporty attire. Built to be durable and lightweight, these sneakers are perfect for daily use.",
    price: 20,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto/global/365215/28/sv04/fnd/IND/fmt/png",
  },
  {
    name: "Men's Joggers",
    category: "pants",
    shortDesc: "joggers for men",
    longDesc:
      "These men's joggers are crafted from ultra-soft, breathable fabric that keeps you comfortable throughout the day. The elastic waistband provides a secure yet flexible fit, perfect for workouts, lounging, or casual outings. With a modern tapered style, these joggers maintain a clean, stylish appearance. They are lightweight, durable, and designed for long-lasting use.",
    price: 15,
    image:
      "https://nobero.com/cdn/shop/files/Exports-0030_11713cb4-a2d3-4749-bd36-89519504a525.jpg?v=1762148057",
  },
  {
    name: "Nike Revolution 7",
    category: "running shoes",
    shortDesc: "lightweight running shoes",
    longDesc:
      "The Nike Revolution 7 delivers an exceptional running experience with its breathable mesh upper and lightweight build. The midsole cushioning adapts to your stride, offering smooth transitions and maximum comfort during long runs. Designed with a modern athletic look, these shoes blend performance and style effortlessly. Whether jogging or training, they provide excellent grip and long-term durability.",
    price: 40,
    image:
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/450ed1df-8e17-4d87-a244-85697874661c/NIKE+REVOLUTION+7.png",
  },
  {
    name: "Adidas RunFalcon",
    category: "sneakers",
    shortDesc: "breathable sneakers",
    longDesc:
      "The Adidas RunFalcon sneakers are engineered with a supportive mesh design that boosts airflow and keeps your feet cool. They feature superior cushioning in the midsole to enhance comfort during long walks or workouts. The durable outsole ensures stable performance on various surfaces. These versatile sneakers complement both sporty and everyday casual outfits.",
    price: 30,
    image:
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/294322427abb4c03bb7671a35efac2f2_9366/Runfalcon_5_Running_Shoes_Black_IE8812_HM5.jpg",
  },
  {
    name: "Levi's Men's Jeans",
    category: "jeans",
    shortDesc: "slim fit jeans",
    longDesc:
      "These Levi’s slim fit jeans are built from high-quality stretch denim, providing both durability and flexibility. The slim profile enhances your silhouette while maintaining comfort throughout the day. Designed with classic five-pocket styling, they bring a timeless and versatile look suitable for casual or semi-formal settings. They maintain their shape even after repeated wear and washes.",
    price: 25,
    image:
      "https://levi.in/cdn/shop/files/4137c782-6609-41c6-aea2-255aa328f2a31747302446237-Mens-512-Slim-Tapered-Fit-Black-Jeans-421747302445722-1.jpg?v=1761629892",
  },
  {
    name: "Basic Cotton Tee",
    category: "tshirt",
    shortDesc: "plain cotton t-shirt",
    longDesc:
      "This plain cotton t-shirt is crafted from premium-grade fabric, offering incredible softness and breathability. The lightweight build makes it ideal for hot weather or layering during cooler months. Designed to maintain its color and shape, it withstands repeated washes with ease. Suitable for casual outings, gym sessions, or daily wear, it is a wardrobe essential.",
    price: 10,
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/a/p/v/xl-2-polo-blue-magneto-original-imagxpnupcyz97xh.jpeg?q=70&crop=false",
  },
  {
    name: "Winter Hoodie",
    category: "hoodie",
    shortDesc: "warm hoodie for men",
    longDesc:
      "This winter hoodie features a thick fleece lining that delivers exceptional warmth and insulation. The soft-touch fabric feels comfortable against your skin, making it perfect for everyday wear during colder seasons. The adjustable hood and kangaroo pocket add practicality and style. Its durable stitching ensures long-term use without losing shape or quality.",
    price: 22,
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/c/z/e/s-solid-hoodie-man-clinsy-fashion-original-imahgvq2jhuset9y.jpeg?q=70&crop=false",
  },
  {
    name: "Decathlon Track Pants",
    category: "pants",
    shortDesc: "sports track pants",
    longDesc:
      "Designed for athletes and fitness enthusiasts, these track pants offer excellent ventilation and flexibility. The quick-dry fabric ensures sweat evaporates quickly, keeping you cool during intense training. A comfortable waistband and adjustable drawstring guarantee a perfect fit. Lightweight and durable, these pants are ideal for running, gym workouts, or daily wear.",
    price: 18,
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/e/6/d/l-tp-12-0dg-lemona-original-imahbbggqzkmtwp6.jpeg?q=70&crop=false",
  },
  {
    name: "Urban Leather Belt",
    category: "accessories",
    shortDesc: "classic leather belt",
    longDesc:
      "This premium leather belt combines durability with a modern, stylish design. The metal buckle is crafted to resist wear and tear, ensuring long-lasting shine and functionality. Whether paired with jeans or formal pants, it enhances your outfit with its sleek look. The genuine leather construction ensures the belt retains its shape even after years of use.",
    price: 12,
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/belt/5/9/o/one-size-mark-ubf999blk8021-men-s-belt-urban-forest-original-imah3g67cchjhfc3.jpeg?q=70&crop=false",
  },
  {
    name: "Formal Derby Shoes",
    category: "shoes",
    shortDesc: "men’s formal shoes",
    longDesc:
      "These formal Derby shoes are crafted with a polished finish that gives a refined and elegant appearance. The cushioned insole offers all-day comfort, even during long office hours or events. With strong stitching and durable materials, these shoes ensure lasting performance. Perfect for business meetings, weddings, or any formal occasion.",
    price: 45,
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/i/l/m/7-8216472-7-bata-jet-black-original-imah45txqduudyts.jpeg?q=70&crop=false",
  },
  {
    name: "Sports Cap",
    category: "accessories",
    shortDesc: "adjustable sports cap",
    longDesc:
      "This sports cap features a breathable fabric that helps reduce heat and moisture during outdoor activities. The adjustable strap ensures a comfortable and secure fit for all head sizes. Its lightweight construction makes it perfect for running, hiking, or casual daily wear. The curved brim provides excellent sun protection for long hours outdoors.",
    price: 8,
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/cap/x/x/s/free-fr-comfort-fasher-original-imahf636nxbdtrdp.jpeg?q=70&crop=false",
  },
  {
    name: "Puffer Winter Jacket",
    category: "jacket",
    shortDesc: "warm puffer jacket",
    longDesc:
      "This insulated puffer jacket is designed to withstand extremely cold weather conditions. The thick padding traps heat efficiently, keeping you warm and comfortable for hours. Its water-resistant outer layer protects you from snow and light rain. With multiple pockets and a stylish build, it's ideal for outdoor travel and winter adventures.",
    price: 50,
    image: "https://m.media-amazon.com/images/I/71merWllWmL._SX679_.jpg",
  },
  {
    name: "Digital Sports Watch",
    category: "watch",
    shortDesc: "waterproof sports watch",
    longDesc:
      "This digital sports watch offers a rugged build and waterproof performance, making it perfect for outdoor activities. The bright LED display ensures easy visibility during day or night. Features include a stopwatch, alarm, and backlight for multi-purpose use. Built for athletes, it combines durability with modern design.",
    price: 25,
    image:
      "https://m.media-amazon.com/images/I/61FQK1zG0NL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    name: "Gym Gloves",
    category: "fitness",
    shortDesc: "padded gym gloves",
    longDesc:
      "These gym gloves feature anti-slip padding that enhances your grip during weightlifting and workouts. The breathable mesh material keeps your hands cool and sweat-free. With strong stitching and flexible fabric, they allow unrestricted movement. Ideal for beginners and professionals looking for extra support.",
    price: 7,
    image:
      "https://m.media-amazon.com/images/G/31/apparel/rcxgs/tile._CB483369979_.gif",
  },
  {
    name: "Men's Sweatshirt",
    category: "hoodie",
    shortDesc: "casual sweatshirt",
    longDesc:
      "This sweatshirt is made from premium soft fabric that feels gentle on the skin. The relaxed fit provides maximum comfort, making it ideal for winter or cool evenings. Its minimalist design works well with jeans or joggers for a stylish casual look. Designed to endure multiple washes without fading.",
    price: 20,
    image: "https://m.media-amazon.com/images/I/51sSJUx8mwL._SY879_.jpg",
  },
  {
    name: "Sports Shorts",
    category: "shorts",
    shortDesc: "quick dry shorts",
    longDesc:
      "These sports shorts are crafted from a quick-dry fabric that absorbs sweat and enhances comfort during workouts. The elastic waistband with drawstring ensures a perfect fit. Lightweight and breathable, they allow free movement during running, gym sessions, or sports. Their minimalist design adds a modern athletic look.",
    price: 12,
    image: "https://m.media-amazon.com/images/I/61PDBe1KwGL._SX679_.jpg",
  },
  {
    name: "Canvas Casual Shoes",
    category: "shoes",
    shortDesc: "casual canvas shoes",
    longDesc:
      "These canvas shoes feature a breathable upper design that keeps your feet cool even during extended wear. The cushioned sole provides excellent support for walking and daily activities. Their versatile styling pairs effortlessly with jeans, shorts, or chinos. Durable, lightweight, and easy to clean, they are perfect for everyday use.",
    price: 18,
    image: "https://m.media-amazon.com/images/I/71GvKt5cshL._SY695_.jpg",
  },
  {
    name: "UV Sunglasses",
    category: "accessories",
    shortDesc: "UV protection sunglasses",
    longDesc:
      "These UV-protected sunglasses offer superior eye protection under harsh sunlight. The lightweight frame ensures comfort during extended wear. Designed with a stylish finish, they complement both casual and outdoor attire. The scratch-resistant lenses enhance durability for long-term use.",
    price: 14,
    image: "https://m.media-amazon.com/images/I/61+THk53YIL._SX679_.jpg",
  },
  {
    name: "Travel Backpack",
    category: "bags",
    shortDesc: "large capacity backpack",
    longDesc:
      "This travel backpack provides ample storage space for daily commuting or long trips. The padded straps reduce shoulder strain, offering maximum comfort. Multiple compartments help organize your essentials efficiently. Built with durable material, it withstands rough handling and frequent travel.",
    price: 32,
    image: "https://m.media-amazon.com/images/I/91wbRaEOY9L._SL1500_.jpg",
  },
  {
    name: "Men's Wallet",
    category: "accessories",
    shortDesc: "leather wallet",
    longDesc:
      "This leather wallet is crafted from premium material designed to last for years without losing shape. It includes multiple card slots, a transparent ID pocket, and ample space for currency. The slim and elegant design makes it easy to carry in any pocket. A perfect combination of functionality and classic style.",
    price: 11,
    image: "https://m.media-amazon.com/images/I/71FVLiwUl3L._SL1500_.jpg",
  },
];

products.forEach((element) => {
  const { name, category, shortDesc, longDesc, price, image } = element;
  db.run(
    `INSERT INTO  products(name, category, short_desc, long_desc, price, image_url) values(?,?,?,?,?,?)`,
    [name, category, shortDesc, longDesc, price, image]
  );
});
