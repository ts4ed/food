import { Button, Container, Img } from './OrderList.styled';

export default function OrderList({
  cart,
  deleteProduct,
  increment,
  decrement,
}) {
  return cart.map(c => (
    <li key={c.id}>
      <Img
        src={`https://my-project100.herokuapp.com/${c.picture}`}
        alt={c.title}
      />
      <div>
        <Container>
          <h3>{c.title}</h3>
          <p>Price: $ {c.price} USD</p>
        </Container>
        <Container>
          <input
            onChange={e => {}}
            type="number"
            min="1"
            max="100"
            value={c.count}
          />

          <Button
            type="button"
            onClick={() => {
              increment(c.id);
            }}
          >
            + 1
          </Button>
          <Button
            type="button"
            onClick={() => {
              decrement(c.id);
            }}
          >
            - 1
          </Button>
          <Button type="button" onClick={() => deleteProduct(c.id)}>
            delete
          </Button>
        </Container>
      </div>
    </li>
  ));
}
