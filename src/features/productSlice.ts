import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/utils/interfaces/product";

const initialState: Product[] = [
  {
    id: "88bc1810-9241-4a8d-9642-b1158a6eeb0a",
    title: "Nike Shoe",
    price: 3000,
    image: "/nike.jpg",
    category: "shoe",
    rating: 4,
  },
  {
    id: "eb1a13aa-27a3-477b-8e11-e3f0101d0ae8",
    title: "H&M Shirt",
    price: 600,
    image: "/shirt.jpg",
    category: "shirt",
    rating: 4,
  },
  {
    id: "7c3323a5-2a66-42e4-849c-d98e9a985f7c",
    title: "Apple iPhone",
    price: 50000,
    image: "/mobile-phone.jpg",
    category: "electronic",
    rating: 5,
  },
  {
    id: "a15b9b7f-1376-45e5-9563-b6819ddfbb8f",
    title: "Panasonic Digital Camera",
    price: 25000,
    image: "/digital-camera.jpg",
    category: "electronic",
    rating: 5,
  },
  {
    id: "cc53695a-7b26-497f-a529-a851d371b356",
    title: "Puma Shoe",
    price: 3500,
    image: "/puma.jpg",
    category: "shoe",
    rating: 5,
  },
  {
    id: "985bf3ca-ebe8-4ffc-b097-be71f3f6d9c5",
    title: "Polo Shirt",
    price: 400,
    image: "/shirt-2.png",
    category: "shirt",
    rating: 3,
  },
];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
