import styled from 'styled-components';

export const Container = styled.div``;

export const ShopsList = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-around;
`;
export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 29px;
  padding: 0;
  margin: 0;
  margin-top: 10px;
`;

export const ItemList = styled.ul`
  display: grid;
  max-width: calc(100%);
  grid-template-columns: repeat(4, minmax(350px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 32px;
  margin-top: 60px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`;

export const Item = styled.h3`
  margin: 0;
  padding: 0;
  color: black;
  font-size: 20px;
`;
