import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import * as S from "~/pages/ShoppingListPage.styled";
import { TShopItem } from "~/types/list";
import { CartContext } from "~/contexts/CartContext";

const StartDiv = styled.div`
  color: black;
`;
const StartImage = styled.img`
  height: 20%;
  width: 20%;
`;
const StartButton = styled.button`
  height: 10%;
  width: 10%;
`;

function ShoppingListPage() {
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [state, setState] = useState<TShopItem[]>([]);

  const handleShoppingList = async () => {
    try {
      const response = await axios.get("api/shoplist");
      setState(response.data.shoppingLists);
    } catch (error) {
      throw new Error("Failed to fetch shoplist data");
    }
  };

  useEffect(() => {
    handleShoppingList();
  }, []);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <S.Container>
      {state.length > 0 &&
        state.map((item) => {
          let uuid = self.crypto.randomUUID();
          return (
            <StartDiv key={uuid}>
              <StartDiv>{item.id}</StartDiv>
              <StartImage src={item.itemImage} />
              <StartDiv>{item.itemName}</StartDiv>
              <StartDiv>{item.itemSubName}</StartDiv>
              <StartDiv>{item.itemDiscountPrice}</StartDiv>
              <StartDiv>{item.itemPrice}</StartDiv>
              <StartDiv>{item.itemDiscountRate}</StartDiv>
              <StartDiv>{item.itemType}</StartDiv>
              <StartButton onClick={() => addToCart(item)}>
                장바구니
              </StartButton>
            </StartDiv>
          );
        })}
      <StartButton onClick={() => navigate("/cart")}>
        장바구니 바로가기
      </StartButton>
    </S.Container>
  );
}

export default ShoppingListPage;
