/**
 * BURGER BITE – Centralized Restaurant Configuration & Data Source
 * 
 * All business details, contact information, menu products, prices,
 * hours, and promotional settings can be customized from this single file.
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'burgers' | 'shawarma' | 'fries' | 'drinks';
  description: string;
  price: string;
  isDemo: boolean;
  demoNote?: string;
  image: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  isOwnerReviewRequired?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Burgers' | 'Shawarma' | 'Fries' | 'Kitchen';
  image: string;
  alt: string;
  caption: string;
  isDemoImage: boolean;
}

export interface RestaurantConfig {
  business: {
    name: string;
    tagline: string;
    category: string;
    address: {
      line1: string;
      area: string;
      city: string;
      province: string;
      country: string;
      full: string;
    };
    phone: {
      display: string;
      tel: string;
      raw: string;
    };
    whatsapp: {
      number: string;
      defaultMessage: string;
    };
    googleMaps: {
      url: string;
      embedSrc: string;
      directionsUrl: string;
    };
    openingHours: {
      display: string;
      dailyOpens: string;
      dailyCloses: string;
      needsOwnerConfirmation: boolean;
      confirmationNotice: string;
    };
    socialLinks: {
      facebook: string;
      instagram: string;
      tiktok: string;
      isDemoNotice: string;
    };
  };
  announcements: {
    topBar: string;
    promotionalBannerEnabled: boolean;
    promotionalBannerText: string;
    promotionalNotice: string;
  };
  menu: MenuItem[];
  faqs: FAQItem[];
  gallery: GalleryItem[];
}

export const initialRestaurantData: RestaurantConfig = {
  business: {
    name: "BURGER BITE",
    tagline: "Big Bites. Bold Flavours.",
    category: "Fast Food Restaurant",
    address: {
      line1: "Main Adda",
      area: "Mian Gujar",
      city: "Peshawar",
      province: "Khyber Pakhtunkhwa",
      country: "Pakistan",
      full: "Mian Gujar, Main Adda, Peshawar, Khyber Pakhtunkhwa, Pakistan"
    },
    phone: {
      display: "+92 311 9598182",
      tel: "tel:+923119598182",
      raw: "923119598182"
    },
    whatsapp: {
      number: "923119598182",
      defaultMessage: "Hello Burger Bite! I would like to enquire about your menu and place an order. Please share the available options."
    },
    googleMaps: {
      url: "https://maps.app.goo.gl/JdHsgxWXw9UjDJih7",
      // Clean open street / maps embed centered near Peshawar / Mian Gujar
      embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105885.0401833446!2d71.45524675!3d34.0151368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d91729a43a0e67%3A0x6b7724f794358bb0!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s",
      directionsUrl: "https://maps.app.goo.gl/JdHsgxWXw9UjDJih7"
    },
    openingHours: {
      display: "4:00 PM – 10:00 PM daily",
      dailyOpens: "4:00 PM",
      dailyCloses: "10:00 PM",
      needsOwnerConfirmation: true,
      confirmationNotice: "Listed opening hours (4:00 PM – 10:00 PM) are subject to owner confirmation."
    },
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
      isDemoNotice: "Social profiles pending owner confirmation and will be linked once verified."
    }
  },
  announcements: {
    topBar: "Welcome to BURGER BITE – Discover Your Next Favourite Bite.",
    promotionalBannerEnabled: false, // Disabled by default until owner confirms an offer
    promotionalBannerText: "Special Street Deal: Enquire on WhatsApp for today's fresh batch specials!",
    promotionalNotice: "Promotional announcements are disabled until verified by the restaurant owner."
  },
  menu: [
    {
      id: "bb-burger-1",
      name: "Crispy Fillet Burger",
      category: "burgers",
      description: "Crispy seasoned golden fillet with melted cheese, fresh crisp lettuce, and special sauce in a toasted sesame brioche bun.",
      price: "Rs. 350",
      isDemo: true,
      demoNote: "DEMO MENU ITEM & DEMO PRICE – Awaiting owner's official menu sheet.",
      image: "/src/assets/images/hero_gourmet_burger_1793871472966.jpg",
      popular: true
    },
    {
      id: "bb-burger-2",
      name: "Double Decker Burger",
      category: "burgers",
      description: "Two stacked patties layered with double cheddar, sliced tomatoes, tangy relish, and signature street burger dressing.",
      price: "Rs. 480",
      isDemo: true,
      demoNote: "DEMO MENU ITEM & DEMO PRICE – Pending owner confirmation.",
      image: "/src/assets/images/hero_gourmet_burger_1793871472966.jpg",
      popular: true
    },
    {
      id: "bb-burger-3",
      name: "Classic Street Burger",
      category: "burgers",
      description: "Traditional local fast-food street style burger with fresh egg, onions, and house mayonnaise dressing.",
      price: "Rs. 280",
      isDemo: true,
      demoNote: "DEMO MENU ITEM & DEMO PRICE – Pending owner confirmation.",
      image: "/src/assets/images/hero_gourmet_burger_1793871472966.jpg",
      popular: false
    },
    {
      id: "bb-shawarma-1",
      name: "Special Chicken Shawarma Roll",
      category: "shawarma",
      description: "Thinly roasted tender chicken marinated with local spices, wrapped in toasted pita with authentic garlic sauce and crisp pickles.",
      price: "Rs. 250",
      isDemo: true,
      demoNote: "DEMO MENU ITEM & DEMO PRICE – Awaiting owner's official recipe and price.",
      image: "/src/assets/images/gallery_shawarma_wrap_1793871474670.jpg",
      popular: true
    },
    {
      id: "bb-shawarma-2",
      name: "Cheese Chicken Shawarma",
      category: "shawarma",
      description: "Roasted chicken shawarma roll stuffed with melted cheddar and mozzarella cheese blend, toasted on flat iron.",
      price: "Rs. 320",
      isDemo: true,
      demoNote: "DEMO MENU ITEM & DEMO PRICE – Pending owner confirmation.",
      image: "/src/assets/images/gallery_shawarma_wrap_1793871474670.jpg",
      popular: false
    },
    {
      id: "bb-shawarma-3",
      name: "Open Shawarma Platter",
      category: "shawarma",
      description: "Sliced spiced chicken served over warm shredded pita pieces, with pickled cucumbers, garlic dip, and fries.",
      price: "Rs. 450",
      isDemo: true,
      demoNote: "DEMO MENU ITEM & DEMO PRICE – Pending owner confirmation.",
      image: "/src/assets/images/gallery_shawarma_wrap_1793871474670.jpg",
      popular: false
    },
    {
      id: "bb-fries-1",
      name: "Crispy Golden French Fries",
      category: "fries",
      description: "Hot, freshly fried crispy potato batons tossed in light sea salt, served with tangy dipping dip.",
      price: "Rs. 180",
      isDemo: true,
      demoNote: "DEMO MENU ITEM & DEMO PRICE – Pending owner confirmation.",
      image: "/src/assets/images/gallery_loaded_fries_1793871475218.jpg",
      popular: true
    },
    {
      id: "bb-fries-2",
      name: "Masala Loaded Fries",
      category: "fries",
      description: "Crisp french fries dusted with zesty Peshawar chaat masala seasoning, served with creamy sauce.",
      price: "Rs. 220",
      isDemo: true,
      demoNote: "DEMO MENU ITEM & DEMO PRICE – Pending owner confirmation.",
      image: "/src/assets/images/gallery_loaded_fries_1793871475218.jpg",
      popular: true
    },
    {
      id: "bb-fries-3",
      name: "Cheesy Garlic Fries",
      category: "fries",
      description: "Deep fried golden fries topped with warm melted cheese sauce and garlic herb drizzle.",
      price: "Rs. 300",
      isDemo: true,
      demoNote: "DEMO MENU ITEM & DEMO PRICE – Pending owner confirmation.",
      image: "/src/assets/images/gallery_loaded_fries_1793871475218.jpg",
      popular: false
    }
  ],
  faqs: [
    {
      question: "Where is Burger Bite located?",
      answer: "Burger Bite is located in Mian Gujar at Main Adda, Peshawar, Khyber Pakhtunkhwa, Pakistan. You can find us right on the main commercial stretch or use the Google Maps link on this site for exact directions."
    },
    {
      question: "How can I place an order?",
      answer: "You can place your order directly by clicking the 'Order on WhatsApp' button on any menu card, by calling +92 311 9598182, or by visiting our counter at Main Adda, Mian Gujar."
    },
    {
      question: "What food is available at Burger Bite?",
      answer: "According to current restaurant listings, Burger Bite specializes in Burgers, Chicken Shawarma, and French Fries. Please enquire directly on WhatsApp for daily item availability."
    },
    {
      question: "Does Burger Bite offer home delivery?",
      answer: "Home delivery options and radius coverage are currently awaiting final owner confirmation. Counter pickup and takeaway are available directly at Main Adda, Mian Gujar. Please message +92 311 9598182 on WhatsApp to ask about local delivery."
    },
    {
      question: "What are the opening hours?",
      answer: "Currently listed business hours are 4:00 PM – 10:00 PM daily. Please note these hours are subject to owner confirmation and may adjust during holidays or special occasions."
    },
    {
      question: "How can I find the restaurant?",
      answer: "Use our 'Get Directions' button to open the verified Google Maps location (https://maps.app.goo.gl/JdHsgxWXw9UjDJih7) directly on your smartphone for turn-by-turn navigation."
    }
  ],
  gallery: [
    {
      id: "g-1",
      title: "Signature Crispy Burger",
      category: "Burgers",
      image: "/src/assets/images/hero_gourmet_burger_1793871472966.jpg",
      alt: "Double layered crispy burger with melted cheese and fresh greens",
      caption: "Crispy chicken fillet layered with melted cheese on toasted brioche bun (Demo presentation photo).",
      isDemoImage: true
    },
    {
      id: "g-2",
      title: "Juicy Street Shawarma",
      category: "Shawarma",
      image: "/src/assets/images/gallery_shawarma_wrap_1793871474670.jpg",
      alt: "Sliced grilled chicken shawarma wrap with garlic sauce",
      caption: "Tender roasted chicken wrapped in grilled flatbread with authentic garlic toum (Demo presentation photo).",
      isDemoImage: true
    },
    {
      id: "g-3",
      title: "Crisp Golden French Fries",
      category: "Fries",
      image: "/src/assets/images/gallery_loaded_fries_1793871475218.jpg",
      alt: "Freshly cooked french fries in serving basket with dipping sauce",
      caption: "Hot salted and seasoned potato fries served with house dipping sauce (Demo presentation photo).",
      isDemoImage: true
    },
    {
      id: "g-4",
      title: "Kitchen & Counter Atmosphere",
      category: "Kitchen",
      image: "/src/assets/images/restaurant_street_vibe_1793871475942.jpg",
      alt: "Fast food restaurant kitchen counter with warm lighting and fresh burgers",
      caption: "Modern street fast-food counter atmosphere in Peshawar (Demo presentation photo).",
      isDemoImage: true
    }
  ]
};
