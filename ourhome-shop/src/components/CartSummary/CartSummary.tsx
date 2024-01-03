import * as S from "~/components/CartSummary/CartSummary.styled";
import Text from "~/components/Text/Text";
import { TCartSummary } from "~/types/cart";

function CartSummary({ total, shipping, finalTotal }: TCartSummary) {
  return (
    <S.Total>
      <Text size="xs">총 금액</Text>
      <S.AlignTextRow>
        <Text size="xl" weight="bold">
          {total.toLocaleString()}
        </Text>
        <Text size="sm">원</Text>
      </S.AlignTextRow>
      <Text color="gray3" size="xxl" weight="bold" css={S.TextMargin}>
        +
      </Text>
      <Text size="xs">배송비</Text>
      <S.AlignTextRow>
        <Text size="xl" weight="bold">
          {shipping.toLocaleString()}
        </Text>
        <Text size="sm">원</Text>
      </S.AlignTextRow>
      <Text color="gray4" size="xs" weight="bold">
        (3만원이상 구매 시 무료배송)
      </Text>
      <Text color="gray3" size="xxl" weight="bold" css={S.TextMargin}>
        =
      </Text>
      <Text size="xs">결제 금액</Text>
      <S.AlignTextRow>
        <Text size="xl" weight="bold">
          {finalTotal.toLocaleString()}
        </Text>
        <Text size="sm">원</Text>
      </S.AlignTextRow>
    </S.Total>
  );
}

export default CartSummary;
