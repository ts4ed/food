import { NavLink, Outlet } from 'react-router-dom';
import { ShopsList, Title, ItemList, Item } from './Shops.styled';
import s from '../../styles.module.css';

export default function Shop() {
  return (
    <div>
      <div>
        <Title>Shops</Title>
        <ShopsList>
          <li>
            <NavLink to="kfc" className={s.link}>
              <Item>KFC</Item>
            </NavLink>
          </li>
          <li>
            <NavLink to="mamamia" className={s.link}>
              <Item>MamaMia</Item>
            </NavLink>
          </li>
          <li>
            <NavLink to="bigmama" className={s.link}>
              <Item>BigMama</Item>
            </NavLink>
          </li>
          <li>
            <NavLink to="easyshop" className={s.link}>
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
    </div>
  );
}
