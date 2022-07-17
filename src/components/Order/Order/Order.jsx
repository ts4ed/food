import { Formik, Field, Form } from 'formik';
import { fetchOrder } from '../../../api/api';
import OrderList from '../OrderList/OrderList';
import {
  Container,
  ItemList,
  FormContainer,
  Text,
  Total,
  Button,
  Label,
} from './Order.styled';

export default function Order({
  cart,
  setCart,
  deleteProduct,
  increment,
  decrement,
  totalPrice,
}) {
  const handleSubmit = ({ name, email, phone, address }, { resetForm }) => {
    fetchOrder({ name, email, phone, address, cart });
    setCart([]);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        address: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Container>
          <FormContainer>
            <Label htmlFor="name">
              <Text>Name</Text>
            </Label>
            <Field id="name" name="name" placeholder="Name" required />

            <Label htmlFor="email">
              <Text>Email</Text>
            </Label>
            <Field
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              required
            />
            <Label htmlFor="phone">
              <Text>Phone</Text>
            </Label>
            <Field id="phone" name="phone" placeholder="Number" required />
            <Label htmlFor="phone">
              <Text>Address</Text>
            </Label>
            <Field id="address" name="address" placeholder="Address" required />
            <Total>
              <p>Total price: $ {Math.round(totalPrice)} USD</p>
              <Button type="submit">Submit</Button>
            </Total>
          </FormContainer>
          <div>
            {cart.length > 0 ? (
              <ItemList>
                <OrderList
                  cart={cart}
                  deleteProduct={deleteProduct}
                  increment={increment}
                  decrement={decrement}
                />
              </ItemList>
            ) : (
              <h2>Сart is empty</h2>
            )}
          </div>
        </Container>
      </Form>
    </Formik>
  );
}
