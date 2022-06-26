import IProductImage from "./ProductImage";

export default interface IProduct {
  id: number
  name: string;
  sku: string;
  price: number;
  description: string;
  details: string;
  rate: string;
  images: IProductImage[]
}