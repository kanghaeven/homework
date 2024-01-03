import { useContext } from "react";
import * as S from "~/components/ShopItem/ShopItem.styled";
import Text from "~/components/Text/Text";
import { CartContext } from "~/contexts/CartContext";
import { TShopItem } from "~/types/list";

function ShopItem({ item }: { item: TShopItem }) {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("CartContext not found");
  }
  const { addToCart } = cartContext;

  const paddedId = item.id < 10 ? `0${item.id}` : item.id;

  const getItemTypeColor = (itemType: string) => {
    if (itemType === "실온") {
      return "gray5";
    } else if (itemType === "냉동") {
      return "blue2";
    } else if (itemType === "냉장") {
      return "blue1";
    } else {
      return "black";
    }
  };

  return (
    <S.Card key={item.id}>
      <Text size={"xl"} weight="bold">
        {paddedId}
      </Text>
      <S.AlignCenter>
        <S.ItemImage src={item.itemImage} />
        <S.CartButton onClick={() => addToCart(item)}>담기</S.CartButton>
      </S.AlignCenter>
      <Text size="sm" max={23}>
        {item.itemName}
      </Text>
      <Text color="gray4" size="xs" max={24}>
        {item.itemSubName}
      </Text>
      <S.AlignRow>
        <S.AlignTextRow>
          <Text size="lg" weight="bold">
            {item.itemDiscountPrice?.toLocaleString()}
          </Text>
          <Text size="lg">원</Text>
        </S.AlignTextRow>
        <Text color="gray5" size="xs" weight="bold" css={S.LineThrough}>
          {item.itemPrice.toLocaleString()}원
        </Text>
        <Text color="orange" size="xs" weight="bold">
          {item.itemDiscountRate}%
        </Text>
      </S.AlignRow>
      <Text color={getItemTypeColor(item.itemType)} size="xs">
        {item.itemType}
      </Text>
    </S.Card>
  );
}

export default ShopItem;
