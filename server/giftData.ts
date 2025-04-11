// This file contains predefined gift data organized by categories and interests
// Used for generating recommendations without requiring the OpenAI API

export interface GiftItem {
  title: string;
  priceRange: string[];  // Different price ranges
  description: string;
  category: string;
  interests: string[];   // Related interests
  ageRanges: string[];   // Appropriate age ranges
  occasions: string[];   // Appropriate occasions
  giftTypes: string[];   // Types of gifts (practical, sentimental, etc.)
  baseExplanation: string;
}

// Gift images from Unsplash (free to use)
export const giftImages = [
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1550051509-8ea5b4218806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611042553365-9f184138c77b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1579329974377-10c2d3458e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1558234200-3efd37111892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1608061330712-729828be3f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
];

// Predefined gift options organized by categories
export const giftDatabase: GiftItem[] = [
  // Technology gifts
  {
    title: "Wireless Earbuds",
    priceRange: ["$25-$50", "$50-$100", "$100-$250"],
    description: "High-quality wireless earbuds with noise cancellation for on-the-go music enjoyment.",
    category: "technology",
    interests: ["technology", "music"],
    ageRanges: ["teen", "young-adult", "adult", "middle-age"],
    occasions: ["birthday", "graduation", "holiday"],
    giftTypes: ["practical", "luxury"],
    baseExplanation: "These wireless earbuds are perfect for music lovers who enjoy listening to their favorite tunes while on the move."
  },
  {
    title: "Smart Home Speaker",
    priceRange: ["$50-$100", "$100-$250"],
    description: "Voice-controlled smart speaker that plays music, answers questions, and controls smart home devices.",
    category: "technology",
    interests: ["technology", "music", "cooking"],
    ageRanges: ["young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "anniversary", "holiday", "wedding"],
    giftTypes: ["practical", "luxury"],
    baseExplanation: "This smart speaker will help organize daily tasks while providing entertainment through music and information access."
  },
  {
    title: "E-Reader",
    priceRange: ["$100-$250"],
    description: "Lightweight e-reader with a paper-like display and weeks of battery life for avid readers.",
    category: "technology",
    interests: ["technology", "reading"],
    ageRanges: ["teen", "young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "graduation", "holiday"],
    giftTypes: ["practical", "luxury"],
    baseExplanation: "This e-reader is ideal for bookworms who enjoy reading anywhere and want to carry their entire library in one slim device."
  },
  {
    title: "Fitness Tracker",
    priceRange: ["$50-$100", "$100-$250"],
    description: "Wearable fitness tracker that monitors activity, sleep, and health metrics.",
    category: "technology",
    interests: ["technology", "fitness", "outdoors"],
    ageRanges: ["teen", "young-adult", "adult", "middle-age"],
    occasions: ["birthday", "anniversary", "holiday"],
    giftTypes: ["practical"],
    baseExplanation: "This fitness tracker will help them stay motivated and track progress toward their health and fitness goals."
  },
  {
    title: "Portable Bluetooth Speaker",
    priceRange: ["$25-$50", "$50-$100"],
    description: "Compact, waterproof Bluetooth speaker with rich sound for indoor and outdoor use.",
    category: "technology",
    interests: ["technology", "music", "outdoors", "travel"],
    ageRanges: ["teen", "young-adult", "adult"],
    occasions: ["birthday", "graduation", "holiday"],
    giftTypes: ["practical"],
    baseExplanation: "This portable speaker is perfect for music lovers who enjoy sharing their favorite tunes with friends, whether at home or outdoors."
  },
  
  // Home and Living gifts
  {
    title: "Artisanal Ceramic Mug Set",
    priceRange: ["$25-$50", "$50-$100"],
    description: "Handcrafted ceramic mugs with unique designs, perfect for coffee and tea enthusiasts.",
    category: "home",
    interests: ["cooking", "art"],
    ageRanges: ["young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "anniversary", "wedding", "holiday"],
    giftTypes: ["practical", "handmade"],
    baseExplanation: "These beautiful handcrafted mugs will elevate their daily coffee or tea ritual with both style and functionality."
  },
  {
    title: "Herb Garden Kit",
    priceRange: ["Under $25", "$25-$50"],
    description: "Indoor herb garden kit with everything needed to grow fresh herbs year-round.",
    category: "home",
    interests: ["cooking", "outdoors"],
    ageRanges: ["young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "housewarming", "holiday"],
    giftTypes: ["practical", "unique"],
    baseExplanation: "This herb garden kit is perfect for cooking enthusiasts who appreciate fresh ingredients and enjoy nurturing plants."
  },
  {
    title: "Weighted Blanket",
    priceRange: ["$50-$100", "$100-$250"],
    description: "Premium weighted blanket that provides comfort and may help reduce anxiety for better sleep.",
    category: "home",
    interests: ["beauty"],
    ageRanges: ["teen", "young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "holiday"],
    giftTypes: ["practical", "luxury"],
    baseExplanation: "This weighted blanket offers comforting pressure that can help with relaxation and better sleep quality."
  },
  {
    title: "Scented Candle Collection",
    priceRange: ["Under $25", "$25-$50"],
    description: "Set of premium scented candles with natural ingredients and long-lasting fragrances.",
    category: "home",
    interests: ["beauty"],
    ageRanges: ["young-adult", "adult", "middle-age"],
    occasions: ["birthday", "anniversary", "holiday"],
    giftTypes: ["practical", "sentimental"],
    baseExplanation: "These scented candles will create a warm, inviting atmosphere with their beautiful fragrances."
  },
  {
    title: "Cold Brew Coffee Maker",
    priceRange: ["$25-$50"],
    description: "Elegant cold brew coffee maker for smooth, low-acid coffee at home.",
    category: "home",
    interests: ["cooking"],
    ageRanges: ["young-adult", "adult", "middle-age"],
    occasions: ["birthday", "holiday"],
    giftTypes: ["practical"],
    baseExplanation: "This cold brew coffee maker is perfect for coffee enthusiasts who appreciate smooth, less acidic coffee they can prepare ahead of time."
  },
  
  // Personal and Fashion gifts
  {
    title: "Customized Jewelry Piece",
    priceRange: ["$50-$100", "$100-$250", "$250+"],
    description: "Personalized jewelry piece that can be customized with names, dates, or meaningful symbols.",
    category: "personal",
    interests: ["art", "beauty"],
    ageRanges: ["teen", "young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "anniversary", "wedding", "graduation"],
    giftTypes: ["sentimental", "luxury", "handmade"],
    baseExplanation: "This personalized jewelry piece carries special meaning through custom details that reflect their unique personality or your relationship."
  },
  {
    title: "Luxury Skincare Set",
    priceRange: ["$50-$100", "$100-$250"],
    description: "Premium skincare collection with natural ingredients for a complete self-care routine.",
    category: "personal",
    interests: ["beauty"],
    ageRanges: ["young-adult", "adult", "middle-age"],
    occasions: ["birthday", "anniversary", "holiday"],
    giftTypes: ["luxury"],
    baseExplanation: "This luxury skincare set will elevate their self-care routine with high-quality products that make them feel pampered."
  },
  {
    title: "Quality Leather Wallet",
    priceRange: ["$50-$100", "$100-$250"],
    description: "Handcrafted leather wallet with RFID protection and thoughtful organizational features.",
    category: "personal",
    interests: ["outdoors", "travel"],
    ageRanges: ["young-adult", "adult", "middle-age"],
    occasions: ["birthday", "graduation", "holiday"],
    giftTypes: ["practical", "luxury"],
    baseExplanation: "This high-quality leather wallet combines classic style with modern functionality for everyday use."
  },
  {
    title: "Personalized Stationery Set",
    priceRange: ["Under $25", "$25-$50"],
    description: "Custom stationery set with personalized notecards, envelopes, and writing tools.",
    category: "personal",
    interests: ["art", "reading"],
    ageRanges: ["teen", "young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "graduation", "holiday"],
    giftTypes: ["sentimental", "handmade"],
    baseExplanation: "This personalized stationery set adds a special touch to their written communications with custom details that reflect their style."
  },
  {
    title: "Weekend Travel Bag",
    priceRange: ["$50-$100", "$100-$250"],
    description: "Stylish and durable weekend bag that's perfect for short trips and getaways.",
    category: "personal",
    interests: ["travel", "outdoors"],
    ageRanges: ["young-adult", "adult", "middle-age"],
    occasions: ["birthday", "graduation", "holiday"],
    giftTypes: ["practical", "luxury"],
    baseExplanation: "This travel bag combines functionality with style, making weekend getaways more convenient and fashionable."
  },
  
  // Experience gifts
  {
    title: "Cooking Class Experience",
    priceRange: ["$50-$100", "$100-$250"],
    description: "Interactive cooking class where they'll learn new techniques and recipes from expert chefs.",
    category: "experiences",
    interests: ["cooking"],
    ageRanges: ["teen", "young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "anniversary", "holiday"],
    giftTypes: ["experiences", "unique"],
    baseExplanation: "This cooking class experience will give them the opportunity to learn new culinary skills while enjoying a fun, interactive activity."
  },
  {
    title: "Concert or Theater Tickets",
    priceRange: ["$50-$100", "$100-$250", "$250+"],
    description: "Tickets to see their favorite band, musician, or a popular theatrical performance.",
    category: "experiences",
    interests: ["music", "art"],
    ageRanges: ["teen", "young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "anniversary", "holiday"],
    giftTypes: ["experiences", "sentimental"],
    baseExplanation: "These tickets will create a memorable experience and the opportunity to enjoy live entertainment they're passionate about."
  },
  {
    title: "Outdoor Adventure Day",
    priceRange: ["$50-$100", "$100-$250"],
    description: "Exciting outdoor activity package like zip-lining, kayaking, or rock climbing.",
    category: "experiences",
    interests: ["outdoors", "fitness", "travel"],
    ageRanges: ["teen", "young-adult", "adult"],
    occasions: ["birthday", "anniversary", "holiday"],
    giftTypes: ["experiences", "unique"],
    baseExplanation: "This adventure experience will give them an exciting day full of outdoor thrills and new challenges to conquer."
  },
  {
    title: "Spa Day Package",
    priceRange: ["$100-$250", "$250+"],
    description: "Relaxing spa day package including massage, facial, and other pampering treatments.",
    category: "experiences",
    interests: ["beauty", "fitness"],
    ageRanges: ["young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "anniversary", "holiday"],
    giftTypes: ["experiences", "luxury"],
    baseExplanation: "This spa package offers a day of complete relaxation and rejuvenation, perfect for someone who deserves some quality self-care time."
  },
  {
    title: "Wine Tasting Tour",
    priceRange: ["$50-$100", "$100-$250"],
    description: "Guided tour of local wineries with tastings of premium wines and food pairings.",
    category: "experiences",
    interests: ["cooking", "travel"],
    ageRanges: ["adult", "middle-age", "senior"],
    occasions: ["birthday", "anniversary", "holiday"],
    giftTypes: ["experiences", "luxury"],
    baseExplanation: "This wine tasting experience combines education with enjoyment as they sample different varieties and learn about wine production."
  },
  
  // Hobby and Interest gifts
  {
    title: "Premium Art Supply Set",
    priceRange: ["$50-$100", "$100-$250"],
    description: "High-quality art supplies for various techniques including painting, drawing, and sketching.",
    category: "hobby",
    interests: ["art"],
    ageRanges: ["child", "teen", "young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "graduation", "holiday"],
    giftTypes: ["practical", "unique"],
    baseExplanation: "This comprehensive art supply set provides quality tools to support their creative expression and artistic development."
  },
  {
    title: "Board Game Collection",
    priceRange: ["$25-$50", "$50-$100"],
    description: "Set of popular strategic and party board games for entertaining game nights.",
    category: "hobby",
    interests: ["gaming"],
    ageRanges: ["child", "teen", "young-adult", "adult", "middle-age"],
    occasions: ["birthday", "holiday"],
    giftTypes: ["practical", "unique"],
    baseExplanation: "These board games will provide hours of entertainment and quality time with friends and family during game nights."
  },
  {
    title: "Digital Piano Keyboard",
    priceRange: ["$100-$250", "$250+"],
    description: "Compact digital keyboard with weighted keys and multiple instrument sounds.",
    category: "hobby",
    interests: ["music"],
    ageRanges: ["child", "teen", "young-adult", "adult", "middle-age"],
    occasions: ["birthday", "graduation", "holiday"],
    giftTypes: ["luxury", "unique"],
    baseExplanation: "This digital keyboard is perfect for exploring musical creativity, whether they're a beginner or experienced player."
  },
  {
    title: "Subscription Box",
    priceRange: ["$25-$50", "$50-$100"],
    description: "Monthly subscription box tailored to their specific interests, delivering curated items regularly.",
    category: "hobby",
    interests: ["cooking", "reading", "beauty", "gaming", "art"],
    ageRanges: ["teen", "young-adult", "adult", "middle-age"],
    occasions: ["birthday", "holiday"],
    giftTypes: ["unique", "experiences"],
    baseExplanation: "This subscription delivers a regular dose of excitement with new curated items related to their interests arriving each month."
  },
  {
    title: "Hiking Gear Set",
    priceRange: ["$50-$100", "$100-$250"],
    description: "Essential hiking equipment including backpack, water bottle, and navigation tools.",
    category: "hobby",
    interests: ["outdoors", "fitness", "travel"],
    ageRanges: ["teen", "young-adult", "adult", "middle-age"],
    occasions: ["birthday", "holiday"],
    giftTypes: ["practical"],
    baseExplanation: "This hiking gear set provides quality equipment for outdoor adventures, making their trips more comfortable and enjoyable."
  },
  
  // Books and Media gifts
  {
    title: "Premium Streaming Subscription",
    priceRange: ["Under $25", "$25-$50"],
    description: "One-year subscription to a premium streaming service for movies, music, or audiobooks.",
    category: "media",
    interests: ["reading", "music", "gaming"],
    ageRanges: ["teen", "young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "graduation", "holiday"],
    giftTypes: ["practical", "experiences"],
    baseExplanation: "This streaming subscription provides access to a vast library of content they'll enjoy throughout the year."
  },
  {
    title: "Collector's Edition Book Set",
    priceRange: ["$50-$100", "$100-$250"],
    description: "Special edition collection of books by their favorite author or in their preferred genre.",
    category: "media",
    interests: ["reading"],
    ageRanges: ["teen", "young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "graduation", "holiday"],
    giftTypes: ["sentimental", "luxury"],
    baseExplanation: "This collector's edition book set combines their passion for reading with beautiful design that deserves a special place on their bookshelf."
  },
  {
    title: "Vinyl Record Collection",
    priceRange: ["$50-$100", "$100-$250"],
    description: "Curated collection of vinyl records featuring classic or contemporary artists.",
    category: "media",
    interests: ["music"],
    ageRanges: ["young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "anniversary", "holiday"],
    giftTypes: ["unique", "sentimental"],
    baseExplanation: "This vinyl collection celebrates their love of music with the warm, authentic sound that only records can provide."
  },
  {
    title: "Documentary Subscription",
    priceRange: ["Under $25", "$25-$50"],
    description: "Subscription to a documentary streaming service covering topics like nature, history, and science.",
    category: "media",
    interests: ["reading", "travel", "outdoors"],
    ageRanges: ["young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "holiday"],
    giftTypes: ["practical", "experiences"],
    baseExplanation: "This documentary subscription feeds their curiosity with fascinating content about the world around us."
  },
  
  // Food and Drink gifts
  {
    title: "Gourmet Food Basket",
    priceRange: ["$50-$100", "$100-$250"],
    description: "Curated basket of premium foods including cheeses, chocolates, and specialty snacks.",
    category: "food",
    interests: ["cooking", "travel"],
    ageRanges: ["young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "anniversary", "holiday"],
    giftTypes: ["luxury", "unique"],
    baseExplanation: "This gourmet food basket offers a delicious culinary journey with high-quality foods from around the world."
  },
  {
    title: "Specialty Coffee Sampler",
    priceRange: ["$25-$50", "$50-$100"],
    description: "Collection of premium single-origin coffees from around the world with tasting notes.",
    category: "food",
    interests: ["cooking"],
    ageRanges: ["young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "holiday"],
    giftTypes: ["practical", "unique"],
    baseExplanation: "This coffee sampler will take them on a global tasting journey with unique flavors from different coffee-growing regions."
  },
  {
    title: "Craft Beer Subscription",
    priceRange: ["$50-$100"],
    description: "Monthly delivery of curated craft beers from top microbreweries.",
    category: "food",
    interests: ["cooking"],
    ageRanges: ["adult", "middle-age"],
    occasions: ["birthday", "holiday"],
    giftTypes: ["experiences", "unique"],
    baseExplanation: "This craft beer subscription introduces them to new and exciting brews each month from innovative microbreweries."
  },
  {
    title: "Artisanal Chocolate Collection",
    priceRange: ["$25-$50", "$50-$100"],
    description: "Handcrafted chocolates made with premium ingredients and unique flavor combinations.",
    category: "food",
    interests: ["cooking"],
    ageRanges: ["teen", "young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "anniversary", "holiday"],
    giftTypes: ["luxury", "handmade"],
    baseExplanation: "These artisanal chocolates offer an indulgent experience with sophisticated flavors crafted by expert chocolatiers."
  },
  {
    title: "Premium Tea Set",
    priceRange: ["$25-$50", "$50-$100"],
    description: "Elegant tea set with a variety of loose-leaf teas and brewing accessories.",
    category: "food",
    interests: ["cooking"],
    ageRanges: ["young-adult", "adult", "middle-age", "senior"],
    occasions: ["birthday", "anniversary", "holiday"],
    giftTypes: ["practical", "luxury"],
    baseExplanation: "This tea set elevates their tea-drinking experience with quality leaves and proper brewing equipment for the perfect cup."
  },
  
  // Kids gifts
  {
    title: "Educational Science Kit",
    priceRange: ["$25-$50", "$50-$100"],
    description: "Hands-on science kit with experiments and activities that teach STEM concepts.",
    category: "kids",
    interests: ["technology", "art"],
    ageRanges: ["child", "teen"],
    occasions: ["birthday", "holiday"],
    giftTypes: ["practical", "experiences"],
    baseExplanation: "This science kit makes learning fun with hands-on experiments that spark curiosity and develop problem-solving skills."
  },
  {
    title: "Building Block Set",
    priceRange: ["$25-$50", "$50-$100", "$100-$250"],
    description: "Creative building blocks set that encourages imagination and develops motor skills.",
    category: "kids",
    interests: ["gaming", "art"],
    ageRanges: ["child"],
    occasions: ["birthday", "holiday"],
    giftTypes: ["practical"],
    baseExplanation: "These building blocks inspire creativity and provide hours of entertainment while developing important spatial and cognitive skills."
  },
  {
    title: "Illustrated Children's Book Collection",
    priceRange: ["$25-$50", "$50-$100"],
    description: "Collection of beautifully illustrated children's books with engaging stories.",
    category: "kids",
    interests: ["reading"],
    ageRanges: ["child"],
    occasions: ["birthday", "holiday"],
    giftTypes: ["sentimental", "practical"],
    baseExplanation: "These illustrated books will nurture a love of reading with captivating stories and beautiful artwork to inspire imagination."
  }
];