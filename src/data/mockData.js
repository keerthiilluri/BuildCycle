// BuildCycle Mock Data & Initial Application State

export const DEMO_USERS = {
  buyer: {
    id: "usr_buyer_1",
    name: "Rajesh Sharma",
    email: "buyer@buildcycle.demo",
    phone: "+91 98490 12345",
    role: "buyer",
    location: "Vijayawada",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  seller: {
    id: "usr_seller_1",
    name: "Sri Lakshmi Hardware & Builders",
    email: "seller@buildcycle.demo",
    phone: "+91 98661 54321",
    role: "seller",
    location: "Vijayawada",
    verified: true,
    rating: 4.8,
    reviewsCount: 34,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  admin: {
    id: "usr_admin_1",
    name: "Platform Admin (EDVC)",
    email: "admin@buildcycle.demo",
    phone: "+91 99000 88888",
    role: "admin",
    location: "Hyderabad",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
  }
};

export const INITIAL_MATERIALS = [
  {
    id: "MAT-101",
    name: "Ceramic Floor Tiles (2x2 ft)",
    category: "Tiles",
    quantity: 10,
    unit: "boxes",
    condition: "New/Unused",
    price: 450,
    originalPrice: 750,
    location: "Vijayawada",
    distanceKm: 12,
    sellerId: "usr_seller_1",
    sellerName: "Sri Lakshmi Hardware",
    sellerRating: 4.8,
    isVerified: true,
    status: "approved",
    postedDate: "2026-08-28",
    pickupAvailable: true,
    deliveryAvailable: true,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Unused excess vitrified ceramic floor tiles from a commercial office interior project in Vijayawada. 10 sealed boxes left over, premium gloss white grey marble finish."
  },
  {
    id: "MAT-102",
    name: "First Class Red Clay Bricks",
    category: "Bricks",
    quantity: 500,
    unit: "pieces",
    condition: "Good condition",
    price: 7,
    originalPrice: 11,
    location: "Guntur",
    distanceKm: 28,
    sellerId: "usr_seller_2",
    sellerName: "Reddy Constructions",
    sellerRating: 4.6,
    isVerified: true,
    status: "approved",
    postedDate: "2026-08-29",
    pickupAvailable: true,
    deliveryAvailable: true,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80"
    ],
    description: "High compressive strength red clay bricks, perfectly stacked and dry stored. Surplus from residential villa construction in Guntur."
  },
  {
    id: "MAT-103",
    name: "Heavy Duty PVC Pipes (4 inch, 10ft)",
    category: "PVC Pipes",
    quantity: 30,
    unit: "pieces",
    condition: "New/Unused",
    price: 120,
    originalPrice: 220,
    location: "Hyderabad",
    distanceKm: 45,
    sellerId: "usr_seller_3",
    sellerName: "Deccan Plumbing Supplies",
    sellerRating: 4.9,
    isVerified: true,
    status: "approved",
    postedDate: "2026-08-30",
    pickupAvailable: true,
    deliveryAvailable: true,
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80"
    ],
    description: "110mm / 4-inch rigid PVC drainage pipes, 10 feet length each. Supreme brand quality, unused in factory condition."
  },
  {
    id: "MAT-104",
    name: "TMT Steel Rods (12mm Fe-550D)",
    category: "Steel Rods",
    quantity: 20,
    unit: "bars (40ft)",
    condition: "New/Unused",
    price: 2800,
    originalPrice: 3500,
    location: "Vijayawada",
    distanceKm: 8,
    sellerId: "usr_seller_1",
    sellerName: "Sri Lakshmi Hardware",
    sellerRating: 4.8,
    isVerified: true,
    status: "approved",
    postedDate: "2026-08-31",
    pickupAvailable: true,
    deliveryAvailable: true,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80"
    ],
    description: "High ductile 12mm Fe-550D TMT reinforcement steel bars. Brand new, rust-free, excess stock from slab casting."
  },
  {
    id: "MAT-105",
    name: "Asian Paints Apex Weatherproof Paint (20L)",
    category: "Paint",
    quantity: 4,
    unit: "buckets",
    condition: "Opened but unused",
    price: 3200,
    originalPrice: 4800,
    location: "Visakhapatnam",
    distanceKm: 65,
    sellerId: "usr_seller_4",
    sellerName: "Vizag Decorators",
    sellerRating: 4.5,
    isVerified: false,
    status: "approved",
    postedDate: "2026-08-25",
    pickupAvailable: true,
    deliveryAvailable: true,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&auto=format&fit=crop&q=80"
    ],
    description: "White shade premium exterior emulsion 20 Litre buckets. Opened 1 bucket for color match, 3 sealed. Remaining fresh inside."
  },
  {
    id: "MAT-106",
    name: "Teak Wood Beams & Frames (6ft x 4in)",
    category: "Wood",
    quantity: 8,
    unit: "pieces",
    condition: "Good condition",
    price: 1800,
    originalPrice: 2800,
    location: "Warangal",
    distanceKm: 90,
    sellerId: "usr_seller_5",
    sellerName: "Kakatiya Timber Mart",
    sellerRating: 4.7,
    isVerified: true,
    status: "approved",
    postedDate: "2026-08-27",
    pickupAvailable: true,
    deliveryAvailable: false,
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Seasoned Burma teak wood beams suitable for door frames and window sections. Termite treated."
  },
  {
    id: "MAT-107",
    name: "Teak Finish Flush Doors (7x3 ft)",
    category: "Doors",
    quantity: 6,
    unit: "doors",
    condition: "New/Unused",
    price: 2400,
    originalPrice: 3800,
    location: "Vijayawada",
    distanceKm: 15,
    sellerId: "usr_seller_1",
    sellerName: "Sri Lakshmi Hardware",
    sellerRating: 4.8,
    isVerified: true,
    status: "approved",
    postedDate: "2026-08-26",
    pickupAvailable: true,
    deliveryAvailable: true,
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Solid core waterproof flush doors with teak veneer finish. Standard bedroom size 84x36 inches."
  },
  {
    id: "MAT-108",
    name: "Kohler Countertop Ceramic Washbasin",
    category: "Sanitary fittings",
    quantity: 2,
    unit: "sets",
    condition: "New/Unused",
    price: 3500,
    originalPrice: 6500,
    location: "Hyderabad",
    distanceKm: 50,
    sellerId: "usr_seller_3",
    sellerName: "Deccan Plumbing Supplies",
    sellerRating: 4.9,
    isVerified: true,
    status: "approved",
    postedDate: "2026-08-24",
    pickupAvailable: true,
    deliveryAvailable: true,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Luxury white ceramic oval vessel basin. Brand new in box with mounting accessories included."
  },
  {
    id: "MAT-109",
    name: "Havells 2.5 sq mm Copper Wires (90m Roll)",
    category: "Electrical materials",
    quantity: 5,
    unit: "rolls",
    condition: "New/Unused",
    price: 1650,
    originalPrice: 2400,
    location: "Guntur",
    distanceKm: 32,
    sellerId: "usr_seller_2",
    sellerName: "Reddyfield Electricals",
    sellerRating: 4.6,
    isVerified: true,
    status: "approved",
    postedDate: "2026-08-31",
    pickupAvailable: true,
    deliveryAvailable: true,
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&auto=format&fit=crop&q=80"
    ],
    description: "FR-LSH flame retardant power cables for house wiring. Red & Blue rolls available."
  },
  {
    id: "MAT-110",
    name: "UPVC Double Glazed Sliding Window",
    category: "Windows",
    quantity: 3,
    unit: "frames",
    condition: "Good condition",
    price: 4200,
    originalPrice: 7000,
    location: "Visakhapatnam",
    distanceKm: 70,
    sellerId: "usr_seller_4",
    sellerName: "Vizag Decorators",
    sellerRating: 4.5,
    isVerified: false,
    status: "pending", // Pending admin review demonstration
    postedDate: "2026-09-01",
    pickupAvailable: true,
    deliveryAvailable: true,
    image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Soundproof UPVC white frame sliding window with mosquito mesh. Dimension: 4ft x 4ft."
  }
];

export const INITIAL_EQUIPMENT = [
  {
    id: "EQP-201",
    name: "Portable Concrete Mixer Machine",
    rentalPrice: 2000,
    unit: "day",
    availability: "Available Now",
    location: "Vijayawada",
    ownerName: "Amaravati Equipment Rentals",
    ownerRating: 4.9,
    isVerified: true,
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?w=600&auto=format&fit=crop&q=80",
    specs: "Diesel Engine | 1 Bag capacity (10/7 cu ft) | Heavy duty wheels"
  },
  {
    id: "EQP-202",
    name: "Bosch Heavy Rotary Hammer Drilling Machine",
    rentalPrice: 500,
    unit: "day",
    availability: "Available Now",
    location: "Vijayawada",
    ownerName: "Sri Lakshmi Tools",
    ownerRating: 4.8,
    isVerified: true,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80",
    specs: "800W Motor | SDS-Plus Chuck | Includes 5 concrete drill bits"
  },
  {
    id: "EQP-203",
    name: "Modular Steel Scaffolding Frame Set",
    rentalPrice: 800,
    unit: "day",
    availability: "Available Now",
    location: "Guntur",
    ownerName: "Guntur Formwork Solutions",
    ownerRating: 4.7,
    isVerified: true,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80",
    specs: "Includes 4 H-frames, cross braces, catwalk planks (Coverage 20ft height)"
  },
  {
    id: "EQP-204",
    name: "High Frequency Petrol Concrete Vibrator",
    rentalPrice: 700,
    unit: "day",
    availability: "Available Now",
    location: "Hyderabad",
    ownerName: "Telangana Plant Hire",
    ownerRating: 4.8,
    isVerified: true,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80",
    specs: "2.5 HP Gasoline engine | 6-meter needle hose included"
  },
  {
    id: "EQP-205",
    name: "Electric Water-Cooled Tile & Marble Cutter",
    rentalPrice: 600,
    unit: "day",
    availability: "Available Now",
    location: "Visakhapatnam",
    ownerName: "Coastal Tools & Equipment",
    ownerRating: 4.6,
    isVerified: false,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&auto=format&fit=crop&q=80",
    specs: "1400W High Torque | 45-degree bevel cut capability | Diamond blade included"
  }
];

export const INITIAL_ORDERS = [
  {
    id: "BC1024",
    date: "2026-09-01",
    buyerName: "Rajesh Sharma",
    buyerEmail: "buyer@buildcycle.demo",
    sellerName: "Sri Lakshmi Hardware",
    materialName: "Ceramic Floor Tiles (2x2 ft)",
    quantity: 10,
    unit: "boxes",
    materialAmount: 4500,
    deliveryCharge: 600,
    platformFee: 100,
    total: 5200,
    status: "Out for Delivery",
    location: "Vijayawada",
    distanceKm: 12
  },
  {
    id: "BC1023",
    date: "2026-08-30",
    buyerName: "Venkat Rao",
    buyerEmail: "venkat@gmail.com",
    sellerName: "Reddyfield Electricals",
    materialName: "Havells 2.5 sq mm Copper Wires",
    quantity: 3,
    unit: "rolls",
    materialAmount: 4950,
    deliveryCharge: 400,
    platformFee: 100,
    total: 5450,
    status: "Delivered",
    location: "Guntur",
    distanceKm: 18
  },
  {
    id: "BC1022",
    date: "2026-08-29",
    buyerName: "Suresh Builders",
    buyerEmail: "suresh@contractor.in",
    sellerName: "Sri Lakshmi Hardware",
    materialName: "TMT Steel Rods (12mm Fe-550D)",
    quantity: 5,
    unit: "bars",
    materialAmount: 14000,
    deliveryCharge: 800,
    platformFee: 100,
    total: 14900,
    status: "Delivered",
    location: "Vijayawada",
    distanceKm: 15
  }
];

export const INITIAL_RENTALS = [
  {
    id: "REN-501",
    date: "2026-09-01",
    equipmentName: "Portable Concrete Mixer Machine",
    renterName: "Rajesh Sharma",
    ownerName: "Amaravati Equipment Rentals",
    rentalDays: 3,
    ratePerDay: 2000,
    rentalAmount: 6000,
    commission10Pct: 600,
    ownerEarnings: 5400,
    status: "Active Rental"
  }
];

export const INITIAL_REVIEWS = [
  {
    id: "REV-1",
    sellerName: "Sri Lakshmi Hardware",
    buyerName: "K. Mohan (Homeowner)",
    rating: 5,
    comment: "Excellent quality unused tiles! Saved almost ₹3,000 compared to main retail stores in Vijayawada.",
    date: "2026-08-27"
  },
  {
    id: "REV-2",
    sellerName: "Reddyfield Electricals",
    buyerName: "P. Vamsi (Interior Designer)",
    rating: 5,
    comment: "Prompt delivery through BuildCycle transport partner. Copper wire rolls were original sealed stock.",
    date: "2026-08-28"
  },
  {
    id: "REV-3",
    sellerName: "Deccan Plumbing Supplies",
    buyerName: "Anil Kumar (Civil Contractor)",
    rating: 4,
    comment: "Good PVC pipes at discounted rate. Saved our site budget from overrun.",
    date: "2026-08-30"
  }
];

// Financial Projections Dataset for EDVC Presentation
export const FINANCIAL_PROJECTIONS = {
  academicDisclaimer: "These are sample projections for an academic EDVC project and are not guaranteed real-world earnings.",
  assumptions: {
    monthlyOrders: 400,
    avgOrderValue: 25000,
    totalGMV: 10000000, // 1 Crore
    commissionRatePct: 8,
    deliveryPlatformMarginAvg: 62.5, // Total ₹25,000 across 400 orders
    rentalCommissionPct: 10,
    premiumMemberMonthlyFee: 999,
    premiumMembersCount: 100,
    adRevenueMonthly: 150000
  },
  revenueStreams: {
    materialCommission: 800000,
    deliveryMargin: 25000,
    equipmentCommission: 37500,
    premiumSubscriptions: 99900,
    advertisements: 150000,
    totalMonthlyRevenue: 1112400 // Approx ~11.1 Lakhs
  },
  operatingExpenses: {
    serverHostingCloud: 45000,
    transportLogisticsOps: 180000,
    customerSupportTeam: 150000,
    marketingAcquisition: 175000,
    edvcStipendAdmin: 100000,
    totalMonthlyExpenses: 650000 // ~6.5 Lakhs
  },
  operatingProfit: 462400 // ~4.6 Lakhs
};
