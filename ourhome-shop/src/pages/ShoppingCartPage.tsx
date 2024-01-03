import { useContext } from "react";
import * as S from "~/pages/ShoppingPage.styled";
import useCart from "~/hooks/useCart";
import { CartContext } from "~/contexts/CartContext";
import { TShopItem } from "~/types/list";
import Text from "~/components/Text/Text";
import CartItem from "~/components/CartItem/CartItem";
import CartSummary from "~/components/CartSummary/CartSummary";

function ShoppingCartPage() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext not found");
  }

  const { cart, setCart } = cartContext;
  const { total, shipping, finalTotal } = useCart(cart);

  const cartTitle = ["상품명", "구매가", "수량", "금액"];

  return (
    <S.Container>
      <S.TitleGrid>
        {cartTitle.map((title) => {
          return <Text size="sm">{title}</Text>;
        })}
      </S.TitleGrid>
      {cart.length > 0 &&
        cart.map((item: TShopItem) => {
          return <CartItem key={item.id} item={item} setCart={setCart} />;
        })}
      <CartSummary total={total} shipping={shipping} finalTotal={finalTotal} />
    </S.Container>
  );
}

export default ShoppingCartPage;
