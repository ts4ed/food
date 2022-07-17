import styled from 'styled-components';

export const ItemList = styled.ul`
  display: grid;
  max-width: calc(100%);
  grid-template-columns: repeat(3, minmax(350px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 32px;
  margin-top: 60px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`;

export const Container = styled.div`
  display: flex;
  margin-left: 50px;
  margin-right: 50px;
`;
export const FormContainer = styled.div`
  width: 250px;
  margin-top: 25px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  margin-right: 10px;
`;

export const Label = styled.label`
  margin-top: 40px;
  margin-bottom: 5px;
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  margin-left: 10px;
`;
