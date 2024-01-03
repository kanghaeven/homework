import { styled, css } from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.2rem;
`;

export const AlignRow = styled.div`
  display: flex;
  align-items: end;
  gap: 0.2rem;
  padding: 0.4em 0;
`;

export const AlignTextRow = styled.div`
  display: flex;
  align-items: end;
`;

export const AlignCenter = styled.div`
  position: relative;
  height: 14rem;
  width: 14rem;
  margin: 0.5rem 0;
`;

export const ItemImage = styled.img`
  height: 100%;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.GRAY200};
`;

export const CartButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 1rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.WHITE};
  background-color: ${({ theme }) => theme.color.ORANGE};
`;

export const LineThrough = css`
  text-decoration: line-through;
`;
