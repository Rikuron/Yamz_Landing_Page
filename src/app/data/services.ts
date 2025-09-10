export type Service = {
  name: string
  description: string
  image: string
  hasModal?: boolean
  cardDescription?: string
  cardImages?: {
    src: string
    imageDescription: string
  }[]
}

export const services: Service[] = [
  {
    "name": "Sales/Services",
    "description": "Offering tech products and services, including GCash transactions and more!",
    "image": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1751384835/Sales_Services_exctvl.jpg",
    "hasModal": false
  },
  {
    "name": "Desktop Repair",
    "description": "Diagnose, repair, and enhance your PC and Laptop’s performance efficiently.",
    "image": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757500927/Desktop_Repair_g2gpw8.png",
    "hasModal": true,
    "cardDescription": "Records of past repair projects and upgrades performed.",
    "cardImages": [
      {
        "src": "",
        "imageDescription": ""
      }
    ]
  },
  {
    "name": "Mobile Repair",
    "description": "Provide diagnostic and repair services for your Mobile Phones.",
    "image": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757500912/Mobile_Repair_xxjuad.png",
    "hasModal": true,
    "cardDescription": "Records of past repair projects and upgrades performed.",
    "cardImages": [
      {
        "src": "",
        "imageDescription": ""
      }
    ]
  },
  {
    "name": "Software Services",
    "description": "Provide software installation and configuration services for your systems.",
    "image": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757500918/Software_Services_ortvjd.png",
    "hasModal": true,
    "cardDescription": "Recent OS installations and configurations",
    "cardImages": [
      {
        "src": "",
        "imageDescription": ""
      }
    ]
  },
  {
    "name": "Maintenance & Cleaning",
    "description": "Keep your systems in top condition with regular maintenance and cleaning.",
    "image": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757500950/Maintenance_and_Cleaning_pryqux.jpg",
    "hasModal": true,
    "cardDescription": "Recent maintenance and cleaning projects",
    "cardImages": [
      {
        "src": "",
        "imageDescription": ""
      }
    ]
  },
  {
    "name": "Network & Infrastructure",
    "description": "Set up and manage your network, server, and IT infrastructure effectively.",
    "image": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757500914/Network_Infrastructure_e0wt1f.jpg",
    "hasModal": true,
    "cardDescription": "Examples of network setups and infrastructure management we've done in the past.",
    "cardImages": [
      {
        "src": "",
        "imageDescription": ""
      }
    ]
  },
  {
    "name": "GCash Services",
    "description": "Provide GCash services, including Cash In and Cash Out services.",
    "image": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757500990/GCash_m4hvqs.jpg",
    "hasModal": false
  }
]