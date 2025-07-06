"use client";
import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState } from "@/stores/store";
import { UpdateQuantity } from "@/utils/interfaces/product";

export const getAllProducts = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const allProducts = useAppSelector((state) => state.product);
  return allProducts;
};