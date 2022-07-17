import { Img, Container, Item } from './ShopList.styled';

export default function ShopList({ food, addToCart }) {
  return food.map(f => (
    <Item key={f.id}>
      <Img src={f.image} alt={f.title} />
      <Container>
        <h3>{f.title}</h3>
        <p>$ {f.price} USD</p>

        <button type="button" onClick={() => addToCart(f)}>
          Add to Cart
        </button>
      </Container>
    </Item>
  ));
}
