import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TCartContext } from "~/types/cart";
import { TShopItem } from "~/types/list";

export const CartContext = createContext<TCartContext | null>({
  cart: [],
  addToCart: () => {},
  setCart: () => {},
});

// Context Provider 컴포넌트 생성
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
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
                itemQuantity:
                  (cartItem.itemQuantity ? cartItem.itemQuantity : 0) + 1,
              }
            : cartItem
        )
      );
    } else {
      // 카트에 없는 경우 새로운 아이템 추가
      setCart([...cart, { ...item, itemQuantity: 1 }]);
    }

    const confirmed = window.confirm(
      `${item.itemName} 상품을 담았습니다. 장바구니로 이동하시겠습니까?`
    );
    if (confirmed) {
      navigate("/cart");
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
