import { ReactNode, createContext, useState } from "react";
import { CartContextType } from "~/types/cart";
import { TShopItem } from "~/types/list";

// Context 생성
export const CartContext = createContext<CartContextType | null>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  setCart: () => {},
});

// Context Provider 컴포넌트 생성
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<TShopItem[]>([]);

  const addToCart = (item: TShopItem) => {
    // 이미 카트에 해당 아이템이 있는지 확인
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // 이미 카트에 있는 경우 수량만 증가
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.itemQuantity + 1,
              }
            : cartItem
        )
      );
    } else {
      // 카트에 없는 경우 새로운 아이템 추가
      setCart([...cart, { ...item, itemQuantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item: TShopItem) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
