import { TProductname } from "../types";

export interface Product {
  id?: string; // Change this to string to accommodate UUID
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  colors: string[];
  category: {
    name: string;
  };
}

export interface FormInput {
  id: string;
  name: TProductname;
  type: string;
  placeholder: string;
  label: string;
}

export interface Categories {
  id: string;
  name: string;
}
