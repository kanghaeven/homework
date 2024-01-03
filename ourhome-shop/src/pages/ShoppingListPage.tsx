import * as S from "~/pages/Page.styled";
import useShopList from "~/hooks/useShopList";
import ShopItem from "~/components/ShopItem/ShopItem";

function ShoppingListPage() {
  const shopList = useShopList();

  return (
    <S.Container>
      <S.CardGrid>
        {shopList.length > 0 &&
          shopList.map((item) => {
            return <ShopItem item={item} />;
          })}
      </S.CardGrid>
    </S.Container>
  );
}

export default ShoppingListPage;
