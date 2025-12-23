const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    category: "beach",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    category: "city",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    category: "mountain",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    category: "heritage",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    category: "forest",
    description: "Live among the treetops in this unique treehouse retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    category: "beach",
    description:
      "Step out of your door onto the sandy beach. Ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    category: "camping",
    description: "Spend your days fishing and kayaking on the serene lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    category: "city",
    description: "Indulge in luxury living with panoramic city views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    category: "mountain",
    description: "Hit the slopes right from your doorstep.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    category: "forest",
    description: "Experience the thrill of the wild up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    category: "heritage",
    description: "Stay in a beautifully preserved canal house.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    category: "trending",
    description: "Have an entire island to yourself.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },

  /* ===== FIXED CASTLE IMAGES ===== */

  {
    title: "Historic Castle in Scotland",
    category: "castle",
    description: "Live like royalty in a historic castle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Ancient Castle Stay in Europe",
    category: "castle",
    description:
      "Stay inside a medieval castle surrounded by history and legends.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
    },
    price: 4200,
    location: "Bavaria",
    country: "Germany",
  },
  {
    title: "French Countryside Castle",
    category: "castle",
    description: "Stay in a historic countryside castle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455",
    },
    price: 3800,
    location: "Loire Valley",
    country: "France",
  },

  /* ===== FIXED ROOM IMAGES ===== */

  {
    title: "Minimal Private Room",
    category: "rooms",
    description: "Clean private room for solo travelers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 500,
    location: "Pune",
    country: "India",
  },
  {
    title: "City Budget Room Near Metro",
    category: "rooms",
    description:
      "Affordable private room near metro station, ideal for solo travelers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    },
    price: 600,
    location: "Delhi",
    country: "India",
  },

  /* ===== REST UNCHANGED ===== */

  {
    title: "Royal Palace Stay",
    category: "heritage",
    description:
      "Experience royal living in a restored palace with traditional architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    },
    price: 2800,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Luxury Pool Villa in Udaipur",
    category: "pool",
    description:
      "Private luxury villa with infinity pool overlooking the Aravalli hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    },
    price: 3200,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Hilltop Camping Experience",
    category: "camping",
    description:
      "Pitch your tent on a hilltop and enjoy sunrise views and bonfire nights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    },
    price: 500,
    location: "Bir Billing",
    country: "India",
  },
  {
    title: "Beach Hut in Andaman",
    category: "beach",
    description:
      "Wooden beach hut just steps away from crystal-clear blue waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 1400,
    location: "Havelock Island",
    country: "India",
  },
];

module.exports = { data: sampleListings };
