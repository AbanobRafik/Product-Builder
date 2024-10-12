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
  name: "title" | "price" | "description" | "imageUrl";
  type: string;
  placeholder: string;
  label: string;
}
