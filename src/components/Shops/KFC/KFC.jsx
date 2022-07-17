import ShopList from '../ShopList/ShopList';

export default function Kfc({ food, onAdd }) {
  return <ShopList food={food} addToCart={onAdd} />;
}
