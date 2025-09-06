export interface Product {
  id: number
  name: string
  category: "underlayment" | "iceWaterShields" | "vents" | "gloves"
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
    name: "Premium Synthetic Underlayment",
    category: "underlayment",
    image: "/placeholder-hu5vo.png",
    description: "High-performance synthetic underlayment for superior protection against water infiltration.",
    fullDescription:
      "Our Premium Synthetic Underlayment provides exceptional protection for residential and commercial roofing applications. Made from advanced polymer materials, it offers superior tear resistance and weatherability compared to traditional felt underlayments.",
    specifications: {
      Material: "Synthetic Polymer",
      Weight: "27 lbs per square",
      Coverage: "1000 sq ft per roll",
      Warranty: "25 years",
      "Fire Rating": "Class A",
      "Wind Rating": "160 mph",
    },
    technicalDetails: [
      "Slip-resistant surface for enhanced safety",
      "UV stable for extended exposure",
      "Excellent tear strength and puncture resistance",
      "Compatible with all roofing materials",
      "Easy installation with minimal waste",
    ],
    price: "$89.99",
    inStock: true,
  },
  {
    id: 2,
    name: "Ice & Water Shield Pro",
    category: "iceWaterShields",
    image: "/placeholder-0ig7m.png",
    description:
      "Self-adhering waterproof membrane designed for critical areas prone to ice dams and wind-driven rain.",
    fullDescription:
      "Ice & Water Shield Pro is a premium self-adhering membrane that provides superior protection in vulnerable areas of the roof. Its advanced adhesive technology ensures a watertight seal around penetrations and critical roof areas.",
    specifications: {
      Material: "Modified Bitumen",
      Thickness: "40 mil",
      Coverage: "200 sq ft per roll",
      "Temperature Range": "-40°F to 180°F",
      Adhesion: "Self-adhering",
      Warranty: "20 years",
    },
    technicalDetails: [
      "Superior adhesion to various substrates",
      "Excellent low-temperature flexibility",
      "Self-sealing around fasteners",
      "Resistant to UV exposure",
      "Easy to install in cold weather",
    ],
    price: "$124.99",
    inStock: true,
  },
  {
    id: 3,
    name: "Ridge Vent System",
    category: "vents",
    image: "/placeholder-ydmjq.png",
    description: "Professional-grade ridge ventilation system for optimal attic airflow and moisture control.",
    fullDescription:
      "Our Ridge Vent System provides continuous ventilation along the roof ridge, ensuring proper attic ventilation and preventing moisture buildup. The system is designed for easy installation and long-term performance.",
    specifications: {
      Material: "High-Impact Polypropylene",
      Length: "4 feet per section",
      "Net Free Area": "18 sq in per linear foot",
      "Wind Rating": "110 mph",
      "Color Options": "Black, Brown, Gray",
      Warranty: "15 years",
    },
    technicalDetails: [
      "Weather-resistant construction",
      "Integrated baffle system",
      "Compatible with all shingle types",
      "Pest and debris protection",
      "Easy snap-together installation",
    ],
    price: "$45.99",
    inStock: true,
  },
  {
    id: 4,
    name: "Professional Work Gloves",
    category: "gloves",
    image: "/placeholder-lhg1a.png",
    description:
      "Durable work gloves specifically designed for roofing professionals with enhanced grip and protection.",
    fullDescription:
      "These Professional Work Gloves are engineered for the demanding conditions of roofing work. They provide excellent dexterity, grip, and protection while maintaining comfort during extended use.",
    specifications: {
      Material: "Synthetic Leather Palm",
      Sizes: "S, M, L, XL, XXL",
      Grip: "Textured Palm and Fingers",
      Cuff: "Adjustable Wrist Closure",
      Certification: "ANSI/ISEA 105",
      Washable: "Machine Washable",
    },
    technicalDetails: [
      "Cut-resistant synthetic leather",
      "Breathable back-of-hand material",
      "Reinforced stress points",
      "Touchscreen compatible fingertips",
      "Excellent wet and dry grip",
    ],
    price: "$24.99",
    inStock: true,
  },
  {
    id: 5,
    name: "Breathable Underlayment",
    category: "underlayment",
    image: "/placeholder-msxkk.png",
    description:
      "Breathable synthetic underlayment that allows moisture vapor to escape while blocking water infiltration.",
    fullDescription:
      "Our Breathable Underlayment combines water protection with vapor permeability, making it ideal for climates with high humidity or temperature variations. This advanced material helps prevent condensation buildup in the roof assembly.",
    specifications: {
      Material: "Microporous Membrane",
      Weight: "22 lbs per square",
      Coverage: "1000 sq ft per roll",
      Permeability: "16 perms",
      "Fire Rating": "Class A",
      Warranty: "20 years",
    },
    technicalDetails: [
      "Vapor permeable technology",
      "Excellent water resistance",
      "Lightweight and easy to handle",
      "Reduces condensation risk",
      "Compatible with metal roofing",
    ],
    price: "$79.99",
    inStock: true,
  },
  {
    id: 6,
    name: "Peel & Stick Ice Barrier",
    category: "iceWaterShields",
    image: "/placeholder-c2gfr.png",
    description: "Easy-to-install peel and stick ice barrier for eaves, valleys, and other vulnerable roof areas.",
    fullDescription:
      "This Peel & Stick Ice Barrier offers reliable protection against ice dams and water infiltration. The easy-to-use peel and stick application makes installation quick and efficient while providing long-lasting performance.",
    specifications: {
      Material: "SBS Modified Bitumen",
      Thickness: "56 mil",
      Coverage: "225 sq ft per roll",
      Adhesive: "Aggressive Acrylic",
      "Temperature Range": "-20°F to 160°F",
      Warranty: "15 years",
    },
    technicalDetails: [
      "Superior cold weather performance",
      "Excellent adhesion properties",
      "Self-sealing around nails",
      "Flexible in low temperatures",
      "Easy release liner removal",
    ],
    price: "$98.99",
    inStock: false,
  },
]

export const categories = [
  { key: "all", label: "All Products" },
  { key: "underlayment", label: "Underlayment" },
  { key: "iceWaterShields", label: "Ice & Water Shields" },
  { key: "vents", label: "Vents" },
  { key: "gloves", label: "Gloves" },
] as const

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((product) => product.category === category)
}
