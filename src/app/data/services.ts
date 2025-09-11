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
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497266/1_p4mmpo.jpg",
        "imageDescription": "Done Screen and Keyboard Replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497458/3.2_zn4bra.jpg",
        "imageDescription": "Done Laptop Screen Replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497589/7.2_mhmotz.jpg",
        "imageDescription": "Done OS Installation and CMOS Battery Replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497719/9_ee4pxp.jpg",
        "imageDescription": "Done Acer Battery Replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497807/11.2_jktoq6.jpg",
        "imageDescription": "Done Keyboard Replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497846/12_l0jtbs.jpg",
        "imageDescription": "Done Troubleshooting, Thermal Paste and CMOS Battery Replacement."
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497860/13.4_rzavv9.jpg",
        "imageDescription": "Done memory and SSD upgrade, thermal paste replacement, RGB fan installation, format and install."
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497878/14_nul95s.jpg",
        "imageDescription": "Done desktop re-casing"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497981/15.4_iekwwf.jpg",
        "imageDescription": "Done Screen Replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498079/16.3_rbgb5z.jpg",
        "imageDescription": "Done upgraded RAM to 16gb, replace SATA cables, format and install"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498240/18.4_aaaald.jpg",
        "imageDescription": "Done screen and keyboard replacement!"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498570/19.2_z8nvhz.jpg",
        "imageDescription": "Done keyboard replacement, charger replacement, upgrade, format, install & backup"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498742/20_qnwcpu.jpg",
        "imageDescription": "Done keyboard, battery & charger replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498621/23.4_faeg2r.jpg",
        "imageDescription": "Done screen replacement"
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
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498954/24_vhmfvf.jpg",
        "imageDescription": "Realme 8i LCD replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498974/24.2_h4vikp.jpg",
        "imageDescription": "Oppo A15 LCD replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498977/24.3_fqh5hm.jpg",
        "imageDescription": "Realme C21Y LCD replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498966/25_esfnme.jpg",
        "imageDescription": "Tecno Spark 20C LCD replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498970/25.2_zl3pdr.jpg",
        "imageDescription": "Infinix Smart 8 LCD replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498963/25.3_ehvunu.jpg",
        "imageDescription": "vivo Y02s LCD replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498951/26_dtfvit.jpg",
        "imageDescription": "iPhone X LCD replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498998/26.2_azlnk5.jpg",
        "imageDescription": "Samsung S22 no power done"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498983/26.3_m3gkfw.jpg",
        "imageDescription": "Redmi Note 8 China Server to Global done"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498991/27_uh0sj4.jpg",
        "imageDescription": "Oppo A12e lcd replacement done"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498958/27.2_g2c9oz.jpg",
        "imageDescription": "Tecno Spark 8C stock logo problem done"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498986/27.3_xwgs0v.jpg",
        "imageDescription": "Realme C12 charing bord replacement and lcd done"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498994/27.4_mwmjjz.jpg",
        "imageDescription": "vivo Y11 stock logo issue done"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757499023/28_u3auty.jpg",
        "imageDescription": "Huawei Y9 Prime pop up camera not working done and lcd replacement done"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757499019/28.2_v2raby.jpg",
        "imageDescription": "Realme C11 LCD replacement done"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757499002/28.3_oqscfl.jpg",
        "imageDescription": "Samsung A8 not charging done"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757499016/29_vp5h36.jpg",
        "imageDescription": "iPhone 6 Plus LCD replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757499007/29.2_l9ahpu.jpg",
        "imageDescription": "Tecno Pop 4 LTE LCD replacement and charging port r"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757499014/29.3_wvtlnd.jpg",
        "imageDescription": "vivo Y02t battery replacement"
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
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497409/2.2_bd0etl.jpg",
        "imageDescription": "Done Format Install"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757588464/5_bfh2lo_c_crop_w_1350_h_1013_ar_4_3_g_auto_yviumi.jpg",
        "imageDescription": "Done OS Installation"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497569/6_tmzkoj.jpg",
        "imageDescription": "Done Chromebook Installation"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497589/7.2_mhmotz.jpg",
        "imageDescription": "Done OS Installation and CMOS Battery Replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497679/8.2_yttpxo.jpg",
        "imageDescription": "Done Windows 11 Ultra Light Installation"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497860/13.4_rzavv9.jpg",
        "imageDescription": "Done memory and SSD upgrade, thermal paste replacement, RGB fan installation, format and install."
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498079/16.3_rbgb5z.jpg",
        "imageDescription": "Done upgraded RAM to 16gb, replace SATA cables, format and install"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498570/19.2_z8nvhz.jpg",
        "imageDescription": "Done keyboard replacement, charger replacement, upgrade, format, install & backup"
      }
    ]
  },
  {
    "name": "Maintenance, Upgrades, & Cleaning",
    "description": "Keep your systems in top condition with regular maintenance and cleaning.",
    "image": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757500950/Maintenance_and_Cleaning_pryqux.jpg",
    "hasModal": true,
    "cardDescription": "Recent maintenance and cleaning projects",
    "cardImages": [
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497507/4_tlhku3.jpg",
        "imageDescription": "Done Troubleshooting"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/c_crop,ar_3:4/v1757497785/10_fkuhw8.jpg",
        "imageDescription": "Done Printer Cleaning and Refilling"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497846/12_l0jtbs.jpg",
        "imageDescription": "Done Troubleshooting, Thermal Paste and CMOS Battery Replacement."
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757497860/13.4_rzavv9.jpg",
        "imageDescription": "Done memory and SSD upgrade, thermal paste replacement, RGB fan installation, format and install."
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498742/20_qnwcpu.jpg",
        "imageDescription": "Done keyboard, battery & charger replacement"
      },
      {
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498615/22.3_kobr6k.jpg",
        "imageDescription": "Done laptop memory upgrade to 16GB"
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
        "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1757498130/17.4_vff5wh.jpg",
        "imageDescription": "Done server maintenance, WS maintenance and LAN cabling"
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