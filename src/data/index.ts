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
    price: "1500",
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
    price: "1000",
    colors: ["#010101", "#C0C0C0"],
    category: {
      name: "Laptops",
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
  { id: uuid(), name: "Phones" },
  { id: uuid(), name: "Laptops" },
  { id: uuid(), name: "PC" },
  { id: uuid(), name: "Clothes" },
  { id: uuid(), name: "Smartphones" },
  { id: uuid(), name: "Cars" },
  { id: uuid(), name: "Tablets" },
  { id: uuid(), name: "TV" },
  { id: uuid(), name: "Smartwatches" },
];
