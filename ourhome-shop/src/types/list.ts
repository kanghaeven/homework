export interface TShopItem {
  id: number;
  itemImage: string;
  itemName: string;
  itemSubName: string;
  itemDiscountPrice: number;
  itemPrice: number;
  itemDiscountRate: number;
  itemType: string;
  itemQuantity?: number;
}
