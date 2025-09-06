export interface Product {
  id: number
  name: string
  category:
    | "valley"
    | "underlayment"
    | "nails"
    | "vents"
    | "flashing"
    | "blades"
    | "gloves"
    | "iceWaterShields"
    | "dripEdge"
    | "gravelStop"
    | "shingles"
    | "flatRoof"
  image: string
  description: string
  fullDescription: string
  specifications: Record<string, string>
  technicalDetails: string[]
  price?: string
  inStock: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: "Valley Flashing",
    category: "valley",
    image: "/placeholder-hu5vo.png",
    description: "High-quality valley flashing for superior water drainage and roof protection.",
    fullDescription:
      "Our Valley Flashing provides exceptional water management in roof valleys, preventing leaks and ensuring long-lasting protection. Made from durable materials designed to withstand Canadian weather conditions.",
    specifications: {
      Material: "Galvanized Steel",
      Width: "20 inches",
      Length: "10 feet",
      Gauge: "26 gauge",
      Finish: "Galvanized coating",
      Warranty: "20 years",
    },
    technicalDetails: [
      "Corrosion-resistant galvanized coating",
      "Pre-formed for easy installation",
      "Compatible with all roofing materials",
      "Excellent water channeling design",
      "Canadian weather tested",
    ],
    price: "$45.99",
    inStock: true,
  },
  {
    id: 2,
    name: "Synthetic Underlayment",
    category: "underlayment",
    image: "/placeholder-0ig7m.png",
    description: "Advanced synthetic underlayment offering superior protection and durability.",
    fullDescription:
      "Our Synthetic Underlayment provides exceptional protection against water infiltration while offering superior tear resistance and UV stability compared to traditional felt.",
    specifications: {
      Material: "Synthetic Polymer",
      Weight: "27 lbs per square",
      Coverage: "1000 sq ft per roll",
      Warranty: "25 years",
      "Fire Rating": "Class A",
      "Wind Rating": "160 mph",
    },
    technicalDetails: [
      "Slip-resistant surface for safety",
      "UV stable for extended exposure",
      "Excellent tear and puncture resistance",
      "Compatible with all roofing materials",
      "Easy installation with minimal waste",
    ],
    price: "$89.99",
    inStock: true,
  },
  {
    id: 3,
    name: "Roofing Coil Nails",
    category: "nails",
    image: "/placeholder-ydmjq.png",
    description: "High-quality coil nails designed for professional roofing applications.",
    fullDescription:
      "Our Roofing Coil Nails are engineered for reliability and performance in demanding roofing applications. Available in various sizes to meet all your fastening needs.",
    specifications: {
      Material: "Galvanized Steel",
      Sizes: '1¼", 1½", 1¾", 2"',
      Head: "Large Head",
      Shank: "Ring Shank",
      Coating: "Hot-Dip Galvanized",
      "Count per Coil": "120 nails",
    },
    technicalDetails: [
      "Superior holding power",
      "Corrosion-resistant coating",
      "Compatible with pneumatic nailers",
      "Consistent quality and performance",
      "Meets building code requirements",
    ],
    price: "$24.99",
    inStock: true,
  },
  {
    id: 4,
    name: "Roof Vent",
    category: "vents",
    image: "/placeholder-lhg1a.png",
    description: "Professional roof ventilation system for optimal attic airflow.",
    fullDescription:
      "Our Roof Vent ensures proper attic ventilation, preventing moisture buildup and extending roof life. Designed for easy installation and maximum airflow efficiency.",
    specifications: {
      Material: "High-Impact Polypropylene",
      "Net Free Area": "50 sq inches",
      Diameter: "6 inches",
      Height: "12 inches",
      "Color Options": "Black, Brown, Gray",
      Warranty: "15 years",
    },
    technicalDetails: [
      "Weather-resistant construction",
      "Integrated pest protection",
      "Easy installation system",
      "Maximum airflow design",
      "Durable UV-resistant material",
    ],
    price: "$35.99",
    inStock: true,
  },
  {
    id: 5,
    name: "Bathroom Vent",
    category: "vents",
    image: "/placeholder-msxkk.png",
    description: "High-efficiency bathroom ventilation fan for moisture control.",
    fullDescription:
      "Our Bathroom Vent provides powerful and quiet operation to remove moisture and odors from bathrooms, preventing mold and mildew growth.",
    specifications: {
      "Air Flow": "110 CFM",
      "Noise Level": "1.5 Sones",
      "Duct Size": "4 inches",
      Motor: "Permanently Lubricated",
      "Energy Star": "Certified",
      Warranty: "6 years",
    },
    technicalDetails: [
      "Quiet operation technology",
      "Energy-efficient motor",
      "Easy installation design",
      "Corrosion-resistant housing",
      "Meets HVI standards",
    ],
    price: "$89.99",
    inStock: true,
  },
  {
    id: 6,
    name: "Plumbing Boot Flashing",
    category: "flashing",
    image: "/placeholder-c2gfr.png",
    description: "Waterproof plumbing boot flashing for pipe penetrations.",
    fullDescription:
      "Our Plumbing Boot Flashing provides reliable waterproof sealing around plumbing vents and pipe penetrations, preventing water infiltration and roof damage.",
    specifications: {
      Material: "EPDM Rubber",
      "Pipe Sizes": '1½" to 4"',
      Base: "Aluminum",
      Temperature: "-40°F to 180°F",
      "UV Resistance": "Excellent",
      Warranty: "20 years",
    },
    technicalDetails: [
      "Flexible EPDM rubber boot",
      "Corrosion-resistant aluminum base",
      "Self-sealing around pipes",
      "Easy installation process",
      "Long-lasting weatherability",
    ],
    price: "$18.99",
    inStock: true,
  },
  {
    id: 7,
    name: "Hook Blades",
    category: "blades",
    image: "/placeholder-hu5vo.png",
    description: "Sharp hook blades for roofing and construction applications.",
    fullDescription:
      "Our Hook Blades are designed for precision cutting in roofing applications. The curved design provides excellent control and cutting efficiency for various materials.",
    specifications: {
      Material: "High Carbon Steel",
      Length: "2.5 inches",
      Thickness: "0.025 inches",
      "Pack Size": "100 blades",
      Compatibility: "Standard utility knives",
      Sharpness: "Razor sharp edge",
    },
    technicalDetails: [
      "Precision ground cutting edge",
      "Durable high carbon steel",
      "Consistent cutting performance",
      "Safe handling design",
      "Professional grade quality",
    ],
    price: "$12.99",
    inStock: true,
  },
  {
    id: 8,
    name: "Straight Blades",
    category: "blades",
    image: "/placeholder-0ig7m.png",
    description: "Professional straight blades for general cutting applications.",
    fullDescription:
      "Our Straight Blades offer versatile cutting performance for a wide range of roofing and construction materials. Engineered for durability and precision.",
    specifications: {
      Material: "High Carbon Steel",
      Length: "2.5 inches",
      Thickness: "0.025 inches",
      "Pack Size": "100 blades",
      Edge: "Single edge",
      Compatibility: "Standard utility knives",
    },
    technicalDetails: [
      "Sharp, long-lasting edge",
      "Consistent blade geometry",
      "Easy blade changes",
      "Professional quality steel",
      "Reliable cutting performance",
    ],
    price: "$10.99",
    inStock: true,
  },
  {
    id: 9,
    name: "Cotton Gloves",
    category: "gloves",
    image: "/placeholder-ydmjq.png",
    description: "Comfortable cotton work gloves for general roofing tasks.",
    fullDescription:
      "Our Cotton Gloves provide comfort and basic protection for general roofing work. Made from high-quality cotton with reinforced palms for durability.",
    specifications: {
      Material: "100% Cotton",
      Sizes: "S, M, L, XL, XXL",
      Palm: "Reinforced",
      Cuff: "Knit wrist",
      Washable: "Machine washable",
      "Pack Size": "12 pairs",
    },
    technicalDetails: [
      "Breathable cotton construction",
      "Reinforced wear areas",
      "Comfortable fit",
      "Good dexterity",
      "Cost-effective protection",
    ],
    price: "$15.99",
    inStock: true,
  },
  {
    id: 10,
    name: "Nitrile Gloves",
    category: "gloves",
    image: "/placeholder-lhg1a.png",
    description: "Durable nitrile-coated gloves for enhanced grip and protection.",
    fullDescription:
      "Our Nitrile Gloves feature a nitrile-coated palm for superior grip and durability. Ideal for roofing work requiring enhanced hand protection and dexterity.",
    specifications: {
      Material: "Nylon with Nitrile Coating",
      Sizes: "S, M, L, XL, XXL",
      Coating: "Nitrile Palm and Fingers",
      Cuff: "Knit wrist",
      Certification: "EN 388",
      "Pack Size": "12 pairs",
    },
    technicalDetails: [
      "Excellent wet and dry grip",
      "Cut and abrasion resistant",
      "Flexible and comfortable",
      "Oil and chemical resistant",
      "Touchscreen compatible",
    ],
    price: "$22.99",
    inStock: true,
  },
  {
    id: 11,
    name: "Ice & Water Shield",
    category: "iceWaterShields",
    image: "/placeholder-msxkk.png",
    description: "Self-adhering waterproof membrane for critical roof areas.",
    fullDescription:
      "Our Ice & Water Shield provides superior protection against ice dams and wind-driven rain. The self-adhering membrane creates a watertight seal in vulnerable roof areas.",
    specifications: {
      Material: "Modified Bitumen",
      Thickness: "40 mil",
      Coverage: "200 sq ft per roll",
      "Temperature Range": "-40°F to 180°F",
      Adhesion: "Self-adhering",
      Warranty: "20 years",
    },
    technicalDetails: [
      "Superior adhesion properties",
      "Excellent low-temperature flexibility",
      "Self-sealing around fasteners",
      "UV resistant surface",
      "Easy cold weather installation",
    ],
    price: "$124.99",
    inStock: true,
  },
  {
    id: 12,
    name: "Shingle Drip Edge",
    category: "dripEdge",
    image: "/placeholder-c2gfr.png",
    description: "Aluminum drip edge designed specifically for shingle roofing.",
    fullDescription:
      "Our Shingle Drip Edge provides essential water management for shingle roofs, directing water away from fascia boards and preventing water damage.",
    specifications: {
      Material: "Aluminum",
      Length: "10 feet",
      Width: "5 inches",
      Gauge: "0.024 inches",
      "Color Options": "White, Brown, Black",
      Warranty: "25 years",
    },
    technicalDetails: [
      "Corrosion-resistant aluminum",
      "Pre-formed for easy installation",
      "Proper water drainage design",
      "Paintable surface",
      "Meets building codes",
    ],
    price: "$28.99",
    inStock: true,
  },
  {
    id: 13,
    name: "Flat Roof Drip Edge",
    category: "dripEdge",
    image: "/placeholder-hu5vo.png",
    description: "Heavy-duty drip edge for flat and low-slope roofing applications.",
    fullDescription:
      "Our Flat Roof Drip Edge is engineered for flat and low-slope roofs, providing superior water management and edge protection in commercial applications.",
    specifications: {
      Material: "Galvanized Steel",
      Height: "4 inches",
      Length: "10 feet",
      Gauge: "24 gauge",
      Finish: "Galvanized coating",
      Warranty: "20 years",
    },
    technicalDetails: [
      "Heavy-duty construction",
      "Superior corrosion resistance",
      "Commercial grade quality",
      "Proper slope design",
      "Easy installation system",
    ],
    price: "$35.99",
    inStock: true,
  },
  {
    id: 14,
    name: "Gravel Stop",
    category: "gravelStop",
    image: "/placeholder-0ig7m.png",
    description: "Professional gravel stop for built-up and modified bitumen roofs.",
    fullDescription:
      "Our Gravel Stop provides essential edge protection for built-up roofing systems, containing gravel and providing a finished appearance while protecting the roof edge.",
    specifications: {
      Material: "Galvanized Steel",
      Height: "4 inches",
      Length: "10 feet",
      Gauge: "24 gauge",
      "Anchor System": "Continuous cleat",
      Warranty: "20 years",
    },
    technicalDetails: [
      "Continuous anchor cleat system",
      "Heavy-duty galvanized construction",
      "Professional finished appearance",
      "Secure gravel containment",
      "Weather-resistant design",
    ],
    price: "$42.99",
    inStock: true,
  },
  {
    id: 15,
    name: "Roofing Shingles",
    category: "shingles",
    image: "/placeholder-ydmjq.png",
    description: "Premium architectural shingles for residential roofing applications.",
    fullDescription:
      "Our Roofing Shingles combine beauty and performance, offering enhanced curb appeal with superior weather protection. Available in multiple colors to complement any home design.",
    specifications: {
      Material: "Fiberglass Mat",
      Weight: "240 lbs per square",
      Coverage: "33.3 sq ft per bundle",
      "Wind Rating": "130 mph",
      "Fire Rating": "Class A",
      Warranty: "30 years",
    },
    technicalDetails: [
      "Dimensional appearance",
      "Superior weather resistance",
      "Enhanced wind protection",
      "Algae-resistant granules",
      "Easy installation system",
    ],
    price: "$125.99",
    inStock: true,
  },
  {
    id: 16,
    name: "Base Sheet Material",
    category: "flatRoof",
    image: "/placeholder-lhg1a.png",
    description: "High-quality base sheet for built-up roofing systems.",
    fullDescription:
      "Our Base Sheet Material provides the foundation layer for built-up roofing systems, offering excellent adhesion and durability for commercial flat roof applications.",
    specifications: {
      Material: "Fiberglass Mat",
      Weight: "43 lbs per square",
      Width: "36 inches",
      Length: "144 feet",
      "Asphalt Type": "Type IV",
      "Fire Rating": "Class A",
    },
    technicalDetails: [
      "Superior dimensional stability",
      "Excellent asphalt compatibility",
      "High tensile strength",
      "Moisture resistant core",
      "Professional grade quality",
    ],
    price: "$89.99",
    inStock: true,
  },
  {
    id: 17,
    name: "Cap Sheet Material",
    category: "flatRoof",
    image: "/placeholder-msxkk.png",
    description: "Granule-surfaced cap sheet for built-up roofing systems.",
    fullDescription:
      "Our Cap Sheet Material serves as the weather surface for built-up roofing systems, featuring mineral granules for UV protection and enhanced durability.",
    specifications: {
      Material: "Fiberglass Mat",
      Weight: "90 lbs per square",
      Width: "36 inches",
      Length: "72 feet",
      Surface: "Mineral Granules",
      "Fire Rating": "Class A",
    },
    technicalDetails: [
      "UV-resistant granule surface",
      "Superior weather protection",
      "Excellent tear resistance",
      "Long-term performance",
      "Easy application process",
    ],
    price: "$145.99",
    inStock: true,
  },
]

export const categories = [
  { key: "all", label: "All Products" },
  { key: "valley", label: "Valley Flashing" },
  { key: "underlayment", label: "Synthetic Underlayment" },
  { key: "nails", label: "Roofing Coil Nails" },
  { key: "vents", label: "Roof Vent" },
  { key: "vents", label: "Bathroom Vent" },
  { key: "flashing", label: "Plumbing Boot Flashing" },
  { key: "blades", label: "Roofing Blades" },
  { key: "gloves", label: "Work Gloves" },
  { key: "iceWaterShields", label: "Ice & Water Shield" },
  { key: "dripEdge", label: "Drip Edge" },
  { key: "gravelStop", label: "Gravel Stop" },
  { key: "shingles", label: "Roofing Shingles" },
  { key: "flatRoof", label: "Flat Roof Material" },
] as const

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((product) => product.category === category)
}
