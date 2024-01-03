import { TShopItem } from "./list";

export interface TCartContext {
  cart: TShopItem[];
  setCart: React.Dispatch<React.SetStateAction<TShopItem[]>>;
  addToCart: (item: TShopItem) => void;
}

export interface TCartItem {
  item: TShopItem;
  setCart: React.Dispatch<React.SetStateAction<TShopItem[]>>;
}

export interface TCartSummary {
  total: number;
  shipping: number;
  finalTotal: number;
}
