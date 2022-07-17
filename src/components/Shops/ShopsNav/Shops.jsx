import { NavLink, Outlet } from 'react-router-dom';
import { Container, ShopsList, Title, ItemList, Item } from './Shops.styled';

export default function Shop() {
  return (
    <Container>
      <div>
        <Title>Shops</Title>
        <ShopsList>
          <li>
            <NavLink to="kfc">
              <Item>KFC</Item>
            </NavLink>
          </li>
          <li>
            <NavLink to="mamamia">
              <Item>MamaMia</Item>
            </NavLink>
          </li>
          <li>
            <NavLink to="bigmama">
              <Item>BigMama</Item>
            </NavLink>
          </li>
          <li>
            <NavLink to="easyshop">
              <Item>EasyShop</Item>
            </NavLink>
          </li>
        </ShopsList>
      </div>
      <div>
        <ItemList>
          <Outlet />
        </ItemList>
      </div>
    </Container>
  );
}
