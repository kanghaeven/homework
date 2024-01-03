import { TShopItem } from "./list";

export interface CartContextType {
  cart: TShopItem[];
  addToCart: (item: TShopItem) => void;
  removeFromCart: (id: number) => void;
  setCart: React.Dispatch<React.SetStateAction<TShopItem[]>>;
}
