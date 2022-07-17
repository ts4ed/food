import ShopList from '../ShopList/ShopList';

export default function EasyShop({ food, onAdd }) {
  return <ShopList food={food} addToCart={onAdd} />;
}
