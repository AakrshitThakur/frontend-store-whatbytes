export interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
}
