import { Categories, FormInput, Product } from "../interfaces";
import { v4 as uuid } from "uuid";

export const productList: Product[] = [
  {
    id: uuid(),
    title: "IPHONE 16 PRO MAX",
    description:
      "The iPhone 16 Pro Max boasts a stunning 6.9-inch display, a powerful A18 Bionic chip, and a 48MP triple-lens camera for pro-level photography. With a titanium frame, it offers durability and elegance, while the enhanced battery life and cutting-edge features make it a top-tier flagship device.",
    imageUrl:
      "https://mobiiprice.com/wp-content/uploads/2024/09/Apple-iPhone-16-Pro-Max.jpg",
    price: "1100",
    colors: ["#1F8A70", "#C0C0C0", "#000"],
    category: {
      name: "Smartphones",
    },
  },

  {
    id: uuid(),
    title: "Chevrolet Camaro unveiled",
    description:
      "Chevrolet has unveiled the latest Camaro, blending bold design with a turbocharged V8 engine that offers exhilarating performance. The new model features advanced aerodynamics, updated suspension for enhanced handling, and cutting-edge tech, making it a thrilling modern muscle car.",
    imageUrl:
      "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/caradvice/private/c044147df677e4c97db1938d43592f57",
    price: "150000",
    colors: ["#FF0032", "#000", "#FFD700"],
    category: {
      name: "Cars",
    },
  },
  {
    id: uuid(),
    title: "T-Shirt",
    description:
      "Stylish, comfortable t-shirt perfect for everyday wear. Available in various colors and sizes.",
    imageUrl:
      "https://contents.mediadecathlon.com/p2606947/k$1c9e0ffdefc3e67bdeabc82be7893e93/men-s-running-t-shirt-red-decathlon-8771124.jpg",
    price: "150",
    colors: ["#FF0032"],
    category: {
      name: "Clothes",
    },
  },
  {
    id: uuid(),
    title: "Asus Tuf F15 Gaming",
    description:
      "The Asus TUF F15 Gaming Laptop is designed for serious gamers, featuring a 15.6-inch 144Hz display, Intel Core i7 processor, and RTX 3060 GPU for smooth gameplay. Its military-grade durability, efficient cooling system, and long battery life ensure excellent performance for gaming and multitasking.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66rRdWGlLtOe87Med2Ze1nJpV-vtD0r_Zyg&s",
    price: "1500",
    colors: ["#010101", "#C0C0C0"],
    category: {
      name: "Laptops",
    },
  },
  {
    id: uuid(),
    title: "Huawei fit 3",
    description:
      "The Huawei Fit 3 combines style with function in a lightweight, versatile smartwatch. Its AMOLED display, 24/7 health tracking, and 10-day battery life make it ideal for active users. With built-in GPS, heart rate monitoring, and customizable faces, it adapts to every need and look.",
    imageUrl:
      "https://btech.com/media/catalog/product/7/8/78b9507461657e048560392b0298e27ec1c53531a024d4baed3e2e6adbe76f62.jpeg?width=800&store=ar&image-type=image",
    price: "300",
    colors: ["#010101", "#C0C0C0", "#1F8A70"],
    category: {
      name: "Smartwatches",
    },
  },
  {
    id: uuid(),
    title: "PC Desktop Gaming",
    description:
      "powerful desktop for gaming, blending high performance with sleek design. Featuring a vivid 4K+ touchscreen display, AMD Ryzen processor, and advanced cooling, it delivers smooth gameplay and stunning visuals. Its minimalist build suits any setup, perfect for immersive gaming experiences.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSraxKarm4tM_TOk29_ki13dbLwPJSamzNMEQ&s",
    price: "2500",
    colors: ["#010101"],
    category: {
      name: "PC Desktop",
    },
  },
  {
    id: uuid(),
    title: "TV NEO QLED 8k",
    description:
      "The Samsung Neo QLED 8K TV delivers breathtaking clarity and vivid colors with Quantum Matrix Technology Pro, powered by the latest Neo Quantum 8K processor. With its ultra-fine contrast, immersive 3D audio, and slim Infinity Screen design, it transforms any space into a cinematic experience, ideal for premium viewing.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAiKAvCf9g-q4IuHZG0jAlkvj6wc95Nke8-g&s",
    price: "2000",
    colors: ["#010101", "#C0C0C0", "#4682B4"],
    category: {
      name: "TV",
    },
  },
  {
    id: uuid(),
    title: "Honor PAD 9X",
    description:
      "The Honor Pad X9 is a versatile tablet featuring an expansive 11.5-inch 2K display with immersive sound through six speakers, ideal for entertainment and productivity. Powered by a Snapdragon processor and boasting a lightweight, sleek design, it offers smooth multitasking, perfect for work, play, and everything in between.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdDov1ceUppbYiERfahT1Q39pBEBUV6CAbg&s",
    price: "1000",
    colors: ["#010101", "#4682B4"],
    category: {
      name: "Tablets",
    },
  },
];

export const FormInputList: FormInput[] = [
  //* title
  {
    id: uuid(),
    name: "title",
    type: "text",
    placeholder: "Product Title",
    label: "Product Title",
  },

  //* decription
  {
    id: uuid(),
    name: "description",
    type: "text",
    placeholder: "Product Description",
    label: "Product Description",
  },

  //* imgUrl
  {
    id: uuid(),
    name: "imageUrl",
    type: "text",
    placeholder: "Product Image Url",
    label: "Product Image Url",
  },

  //* price
  {
    id: uuid(),
    name: "price",
    type: "text",
    placeholder: "Product Price",
    label: "Product Price",
  },
];

export const colors: string[] = [
  "#A31ACB", // Vibrant Purple
  "#FF6E31", // Warm Orange
  "#3C2A21", // Rich Brown
  "#645CBB", // Bold Lavender
  "#FF0032", // Vivid Red
  "#820000", // Deep Maroon
  "#13005A", // Dark Indigo
  "#1F8A70", // Deep Sea Green
  "#84D2C5", // Soft Cyan
  "#FFD700", // Gold
  "#C0C0C0", // Silver
  "#FF69B4", // Hot Pink
  "#FF4500", // OrangeRed
  "#8B4513", // Saddle Brown
  "#4682B4", // Steel Blue
  "#010101", // black
];

export const categories: Categories[] = [
  { id: uuid(), name: "Laptops" },
  { id: uuid(), name: "PC Desktop" },
  { id: uuid(), name: "Clothes" },
  { id: uuid(), name: "Smartphones" },
  { id: uuid(), name: "Cars" },
  { id: uuid(), name: "Tablets" },
  { id: uuid(), name: "TV" },
  { id: uuid(), name: "Smartwatches" },
];
