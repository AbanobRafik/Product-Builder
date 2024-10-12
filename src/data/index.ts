import { FormInput, Product } from "../interfaces";
import { v4 as uuid } from "uuid";

export const productList: Product[] = [
  {
    id: uuid(),
    title: "IPHONE 16 PRO MAX",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel harum quis natus. Officia eum esse officiis non, molestias ipsam, maxime minima eius",
    imageUrl:
      "https://mobiiprice.com/wp-content/uploads/2024/09/Apple-iPhone-16-Pro-Max.jpg",
    price: 1500,
    colors: ["#000", "#fff", "#f00"],
    category: {
      name: "Smartphones",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Camaro unveiled",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel harum quis natus. Officia eum esse officiis non, molestias ipsam, maxime minima eius",
    imageUrl:
      "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/caradvice/private/c044147df677e4c97db1938d43592f57",
    price: 150000,
    colors: ["#000", "#fff", "#f00"],
    category: {
      name: "cars",
    },
  },
  {
    id: uuid(),
    title: "T-Shirt black",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel harum quis natus. Officia eum esse officiis non, molestias ipsam, maxime minima eius",
    imageUrl:
      "https://isto.pt/cdn/shop/files/Heavyweight_Black_ef459afb-ff7a-4f9a-b278-9e9621335444.webp?v=1710414950",
    price: 150,
    colors: ["#000", "#fff", "#f00"],
    category: {
      name: "Clothes",
    },
  },
  {
    id: uuid(),
    title: "HAMBURGER",
    description:
      "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi laboriosam aspernatur accusantium, ullam et maiores delectus voluptates sapiente adipisci nostrum iure impedit dolorem quo. Commodi necessitatibus ab aspernatur. Placeat cumque accusantium beatae quis officia deserunt libero, delectus natus quam quod?",
    imageUrl:
      "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
    price: 15,
    colors: ["#000", "#fff", "#f00"],
    category: {
      name: "food",
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
    type: "number",
    placeholder: "Product Price",
    label: "Product Price",
  },

  //* category
  {
    id: uuid(),
    name: "category",
    type: "string",
    placeholder: "Product Category",
    label: "Product Category",
  },

  //* colors
  {
    id: uuid(),
    name: "colors",
    type: "text",
    placeholder: "Product Colors",
    label: "Product Colors",
  },
];
