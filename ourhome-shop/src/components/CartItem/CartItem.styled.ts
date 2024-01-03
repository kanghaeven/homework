import { styled, css } from "styled-components";

export const TableGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem 2rem;
  border: 0.5px solid ${({ theme }) => theme.color.GRAY200};
`;

export const AlignRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.4em 0;
`;

export const AlignCol = styled(AlignRow)`
  flex-direction: column;
  justify-content: center;
`;

export const AlignTextRow = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemImage = styled.img`
  height: 6rem;
  width: 6rem;
  margin-right: 1rem;
  border: 1px solid ${({ theme }) => theme.color.GRAY200};
`;

export const CountButton = styled.button`
  height: 1.6rem;
  width: 1.6rem;
  border: 2px solid ${({ theme }) => theme.color.GRAY200};
`;

export const CountInput = styled.input`
  height: 1.6rem;
  width: 2rem;
  border: 2px solid ${({ theme }) => theme.color.GRAY200};
  color: ${({ theme }) => theme.color.GRAY500};
  font-weight: 600;
  text-align: center;
`;

export const LineThrough = css`
  text-decoration: line-through;
`;
