import ShopList from '../ShopList/ShopList';

export default function MamaMia({ food, onAdd }) {
  return <ShopList food={food} addToCart={onAdd} />;
}
