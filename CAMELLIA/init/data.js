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
    title: "Desert Oasis in Dubai",
    category: "pool",
    description: "Luxury oasis with a private pool in the desert.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },

  {
    title: "Rustic Log Cabin in Montana",
    category: "farm",
    description: "Cozy log cabin surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },

  {
    title: "Modern Apartment in Tokyo",
    category: "city",
    description: "Explore Tokyo from this modern apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  }, // 🔥 MORE SAMPLE DATA

  {
    title: "Glass Igloo Stay in Arctic Circle",
    category: "arctic",
    description:
      "Sleep under the Northern Lights in a heated glass igloo in the Arctic Circle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
    price: 4500,
    location: "Lapland",
    country: "Finland",
  },

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
    title: "Forest Cabin Escape",
    category: "forest",
    description:
      "Disconnect from the world in this quiet wooden cabin deep in the forest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 950,
    location: "Black Forest",
    country: "Germany",
  },

  {
    title: "Traditional Farm Stay",
    category: "farm",
    description:
      "Live the village life with fresh food, open fields, and peaceful nights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590080877777-6be3e29fa70b",
    },
    price: 700,
    location: "Punjab",
    country: "India",
  },

  {
    title: "City Budget Room Near Metro",
    category: "rooms",
    description:
      "Affordable private room near metro station, ideal for solo travelers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551776235-dde6d4829808",
    },
    price: 600,
    location: "Delhi",
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
    title: "Trending Skyline Apartment",
    category: "trending",
    description:
      "One of the most booked skyline apartments with stunning night views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    price: 2100,
    location: "Singapore",
    country: "Singapore",
  },

  {
    title: "Ancient Castle Stay in Europe",
    category: "castle",
    description:
      "Stay inside a medieval castle surrounded by history and legends.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1563720227542-6f46bfa4c9e0",
    },
    price: 4200,
    location: "Bavaria",
    country: "Germany",
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
  // ===== TRENDING =====
  {
    title: "Trending Luxury Studio",
    category: "trending",
    description: "Highly booked luxury studio with skyline views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    price: 2200,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Trending Beach Condo",
    category: "trending",
    description: "Popular beachfront condo loved by travelers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 2100,
    location: "Goa",
    country: "India",
  },
  {
    title: "Trending City Loft",
    category: "trending",
    description: "Most wished-for city loft this season.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1527030280862-64139fba04ca",
    },
    price: 1900,
    location: "Berlin",
    country: "Germany",
  },

  // ===== ROOMS =====
  {
    title: "Minimal Private Room",
    category: "rooms",
    description: "Clean private room for solo travelers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551776235-dde6d4829808",
    },
    price: 500,
    location: "Pune",
    country: "India",
  },
  {
    title: "Comfort Room Near Airport",
    category: "rooms",
    description: "Comfortable room near international airport.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    },
    price: 700,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Shared Room in City Center",
    category: "rooms",
    description: "Budget shared room in the city center.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    },
    price: 400,
    location: "Bangkok",
    country: "Thailand",
  },

  // ===== CITY =====
  {
    title: "Central City Apartment",
    category: "city",
    description: "Apartment in the heart of the city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    price: 1800,
    location: "Paris",
    country: "France",
  },
  {
    title: "High-Rise City View Flat",
    category: "city",
    description: "High-rise flat with city skyline view.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
    },
    price: 2000,
    location: "Hong Kong",
    country: "China",
  },

  // ===== MOUNTAIN =====
  {
    title: "Himalayan Mountain Cabin",
    category: "mountain",
    description: "Quiet cabin with Himalayan mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    },
    price: 1200,
    location: "Manali",
    country: "India",
  },
  {
    title: "Alpine Wooden Chalet",
    category: "mountain",
    description: "Classic alpine chalet surrounded by peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
    },
    price: 2800,
    location: "Zermatt",
    country: "Switzerland",
  },

  // ===== CASTLE =====
  {
    title: "French Countryside Castle",
    category: "castle",
    description: "Stay in a historic countryside castle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1563720227542-6f46bfa4c9e0",
    },
    price: 3800,
    location: "Loire Valley",
    country: "France",
  },
  {
    title: "Royal Desert Fort",
    category: "castle",
    description: "Ancient desert fort converted into luxury stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    },
    price: 3200,
    location: "Jaisalmer",
    country: "India",
  },

  // ===== POOL =====
  {
    title: "Private Pool Villa",
    category: "pool",
    description: "Villa with private swimming pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    },
    price: 3500,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Infinity Pool Retreat",
    category: "pool",
    description: "Luxury retreat with infinity pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    },
    price: 4200,
    location: "Phuket",
    country: "Thailand",
  },

  // ===== CAMPING =====
  {
    title: "Forest Camping Site",
    category: "camping",
    description: "Tent camping inside dense forest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    },
    price: 450,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Lakeside Camping",
    category: "camping",
    description: "Camping by a peaceful lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1508873699372-7aeab60b44c6",
    },
    price: 550,
    location: "Rishikesh",
    country: "India",
  },

  // ===== FARM =====
  {
    title: "Organic Farm Stay",
    category: "farm",
    description: "Organic farm stay with fresh food.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590080877777-6be3e29fa70b",
    },
    price: 650,
    location: "Nashik",
    country: "India",
  },
  {
    title: "Countryside Farmhouse",
    category: "farm",
    description: "Relaxing farmhouse surrounded by fields.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    price: 800,
    location: "Tuscany",
    country: "Italy",
  },

  // ===== ARCTIC =====
  {
    title: "Snow Lodge Experience",
    category: "arctic",
    description: "Stay inside a snow lodge in Arctic winter.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
    price: 4800,
    location: "Lapland",
    country: "Finland",
  },
  {
    title: "Northern Lights Cabin",
    category: "arctic",
    description: "Cabin perfect for watching auroras.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    },
    price: 5200,
    location: "Tromsø",
    country: "Norway",
  },

  // ===== FOREST =====
  {
    title: "Rainforest Tree Cabin",
    category: "forest",
    description: "Tree cabin inside tropical rainforest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 900,
    location: "Kerala",
    country: "India",
  },
  {
    title: "Forest Lodge Escape",
    category: "forest",
    description: "Wooden lodge deep inside forest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9",
    },
    price: 1100,
    location: "Amazon",
    country: "Brazil",
  },

  // ===== BEACH =====
  {
    title: "Sunset Beach Villa",
    category: "beach",
    description: "Villa facing golden sunset beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 2300,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Coastal Cottage Stay",
    category: "beach",
    description: "Quiet coastal cottage near sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    },
    price: 1600,
    location: "Gokarna",
    country: "India",
  },

  // ===== HERITAGE =====
  {
    title: "Ancient Haveli Stay",
    category: "heritage",
    description: "Traditional haveli with royal interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98",
    },
    price: 2600,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Colonial Heritage Home",
    category: "heritage",
    description: "Colonial-era heritage bungalow.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f",
    },
    price: 2100,
    location: "Pondicherry",
    country: "India",
  },
];

module.exports = { data: sampleListings };
