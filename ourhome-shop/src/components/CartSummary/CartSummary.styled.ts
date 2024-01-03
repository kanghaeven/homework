import { styled, css } from "styled-components";

export const Total = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 0.5rem;
  border: 0.5px solid ${({ theme }) => theme.color.GRAY200};
  background-color: ${({ theme }) => theme.color.GRAY100};
`;

export const AlignTextRow = styled.div`
  display: flex;
  align-items: center;
`;

export const LineThrough = css`
  text-decoration: line-through;
`;

export const TextMargin = css`
  margin: 0 1rem;
`;
