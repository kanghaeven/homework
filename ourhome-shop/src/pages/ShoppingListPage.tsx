import * as S from "~/pages/ShoppingPage.styled";
import useShopList from "~/hooks/useShopList";
import ShopItem from "~/components/ShopItem/ShopItem";

function ShoppingListPage() {
  const shopList = useShopList();

  return (
    <S.ContainerGap>
      <S.CardGrid>
        {shopList.length > 0 &&
          shopList.map((item) => {
            return <ShopItem item={item} />;
          })}
      </S.CardGrid>
    </S.ContainerGap>
  );
}

export default ShoppingListPage;
