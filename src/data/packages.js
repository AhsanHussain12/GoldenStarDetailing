export const packages = [
  {
    id: 1,
    name: "Inside & Out Detailing Package",
    description: `Our Inside & Out Package is the ultimate full-service mobile detailing solution for your vehicle — delivered right to your location.`,
    interior: [
      "Deep cleaning of seats, carpets, and floor mats",
      "Full cleaning of dashboard, doors, console, and windows",
      "Shampoo extraction and steam cleaning for a fresh, sanitized interior",
      "Attention to all the small details most shops miss"
    ],
    exterior: [
      "Complete hand wash of the vehicle body, wheels, and tires",
      "Bug and tar removal for a spotless finish",
      "Application of a protective wax to enhance shine and shield your paint from UV rays and weather"
    ],
    pricing: [
      { type: "Sedan", price: 170 },
      { type: "SUV", price: 180 },
      { type: "Truck", price: 200 }
    ],
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop"
    ]
  }
];

export const addOns = [
  {
    name: "Paint Correction",
    icon: "🔧",
    description: "Removes light scratches, swirl marks, and oxidation. Restores depth and clarity to your paint. Buff & Polish process included."
  },
  {
    name: "Ceramic Coating",
    icon: "🛡",
    description: "Long-lasting protection with a slick, hydrophobic surface."
  },
  {
    name: "Graphene Coating",
    icon: "🛡",
    description: "Advanced protection with higher durability and resistance to water spots and heat."
  }
];

export const getMainPackage = () => packages[0];
export const getAddOns = () => addOns; 