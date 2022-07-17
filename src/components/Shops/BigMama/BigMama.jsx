import ShopList from '../ShopList/ShopList';

export default function BigMama({ food, onAdd }) {
  return <ShopList food={food} addToCart={onAdd} />;
}
