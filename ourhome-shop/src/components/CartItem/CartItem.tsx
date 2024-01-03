import * as S from "~/components/CartItem/CartItem.styled";
import Text from "~/components/Text/Text";
import { TCartItem } from "~/types/cart";
import { TShopItem } from "~/types/list";

function CartItem({ item, setCart }: TCartItem) {
  // 장바구니 아이템의 수량을 변경하는 함수
  const changeQuantity = (quantity: number) => {
    if (quantity < 1) {
      return;
    }
    // 장바구니 내 같은 상품의 수량을 변경
    setCart((prevCart: TShopItem[]) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, itemQuantity: quantity }
          : cartItem
      )
    );
  };

  const newQuantity = item.itemQuantity ? item.itemQuantity : 0;

  return (
    <S.TableGrid key={item.id}>
      <S.AlignRow>
        <S.ItemImage src={item.itemImage} />
        <Text>{item.itemName}</Text>
      </S.AlignRow>
      <S.AlignCol>
        <S.AlignTextRow>
          <Text weight="bold">{item.itemDiscountPrice.toLocaleString()}</Text>
          <Text>원</Text>
        </S.AlignTextRow>
        <Text color="gray5" size="sm" weight="bold" css={S.LineThrough}>
          {item.itemPrice.toLocaleString()}원
        </Text>
      </S.AlignCol>
      <S.AlignCol>
        <S.AlignTextRow>
          <S.CountButton onClick={() => changeQuantity(newQuantity - 1)}>
            <Text color="gray4" size="xl">
              -
            </Text>
          </S.CountButton>
          <S.CountInput
            type="number"
            value={item.itemQuantity}
            onChange={(e) => {
              const newQuantity = Number(e.target.value);
              changeQuantity(newQuantity);
            }}
          />
          <S.CountButton onClick={() => changeQuantity(newQuantity + 1)}>
            <Text color="gray4" size="xl">
              +
            </Text>
          </S.CountButton>
        </S.AlignTextRow>
      </S.AlignCol>
      <S.AlignCol>
        <S.AlignTextRow>
          <Text size="lg" weight="bold">
            {(item.itemDiscountPrice * newQuantity).toLocaleString()}
          </Text>
          <Text size="lg">원</Text>
        </S.AlignTextRow>
      </S.AlignCol>
    </S.TableGrid>
  );
}

export default CartItem;
