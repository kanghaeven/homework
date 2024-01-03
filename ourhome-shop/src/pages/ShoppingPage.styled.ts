import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem;
  overflow: hidden;
`;

export const ContainerGap = styled(Container)`
  gap: 2rem;
`;

export const TableGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem 2rem;
  border: 0.5px solid ${({ theme }) => theme.color.GRAY200};
`;

export const TitleGrid = styled(TableGrid)`
  background-color: ${({ theme }) => theme.color.GRAY100};
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 4rem 0rem;
`;
