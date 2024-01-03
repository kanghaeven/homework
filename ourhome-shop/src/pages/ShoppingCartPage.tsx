import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CartContext } from "~/contexts/CartContext";

const StartDiv = styled.div`
  color: black;
  padding: 10px;
`;
const StartImage = styled.img`
  height: 20%;
  width: 20%;
`;

function ShoppingCartPage() {
  const { cart, setCart } = useContext(CartContext);
  const [shipping, setShipping] = useState(3000);
  const [total, setTotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  const changeQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, itemQuantity: quantity } : item
    );
    setCart(updatedCart);
  };

  useEffect(() => {
    const updatedTotal = cart.reduce(
      (sum, item) => sum + item.itemPrice * item.itemQuantity,
      0
    );
    setTotal(updatedTotal);
  }, [cart]);

  useEffect(() => {
    const updatedShipping = total >= 30000 ? 0 : 3000;
    setShipping(updatedShipping);
  }, [total]);

  useEffect(() => {
    const updatedFinalTotal = total + shipping;
    setFinalTotal(updatedFinalTotal);
  }, [total, shipping]);

  return (
    <StartDiv>
      <StartDiv>Shopping</StartDiv>
      <StartDiv>cart</StartDiv>
      {cart.length > 0 &&
        cart.map((item) => {
          let uuid = self.crypto.randomUUID();
          console.log(item.itemPrice);
          return (
            <StartDiv key={uuid}>
              <StartDiv>{item.id}</StartDiv>
              <StartImage src={item.itemImage} />
              {/* <StartDiv>{item.itemName}</StartDiv> */}
              {/* <StartDiv>{item.itemSubName}</StartDiv> */}
              <StartDiv>{item.itemDiscountPrice}</StartDiv>
              {/* <StartDiv>{item.itemPrice}</StartDiv> */}
              {/* <StartDiv>{item.itemDiscountRate}</StartDiv> */}
              {/* <StartDiv>{item.itemType}</StartDiv> */}
              <input
                type="number"
                value={item.itemQuantity}
                onChange={(e) =>
                  changeQuantity(item.id, Number(e.target.value))
                }
              />
              <StartDiv>{item.itemQuantity}</StartDiv>
              <StartDiv>{item.itemPrice * item.itemQuantity}</StartDiv>
            </StartDiv>
          );
        })}
      <StartDiv>{total}</StartDiv>
      <StartDiv>배송비: {shipping}</StartDiv>
      <StartDiv>최종 결제 금액: {finalTotal}</StartDiv>
    </StartDiv>
  );
}

export default ShoppingCartPage;
