import { useState, useEffect } from "react";
import { TShopItem } from "~/types/list";

function useCart(cart: TShopItem[]) {
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(3000);
  const [finalTotal, setFinalTotal] = useState(0);

  useEffect(() => {
    // 장바구니에 있는 모든 아이템의 가격 합산하여 총 가격 계산
    const updatedTotal = cart.reduce(
      (sum: number, item: TShopItem) =>
        sum +
        item.itemDiscountPrice * (item.itemQuantity ? item.itemQuantity : 0),
      0
    );
    setTotal(updatedTotal);

    // 배송비 계산
    const updatedShipping = total >= 30000 ? 0 : 3000;
    setShipping(updatedShipping);

    // 최종 총 가격 계산
    const updatedFinalTotal = total + shipping;
    setFinalTotal(updatedFinalTotal);
  }, [cart, total, shipping]);

  return { total, shipping, finalTotal };
}

export default useCart;
