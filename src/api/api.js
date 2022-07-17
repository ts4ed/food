import axios from 'axios';

axios.defaults.baseURL = 'https://62d3dfec5112e98e48469fc6.mockapi.io/';

export const fetchProducts = async () => {
  const response = await axios.get(`food`);
  return response.data;
};

export const fetchOrder = async ({ name, email, phone, address, cart }) => {
  await axios.post(`order`, {
    name,
    email,
    phone,
    address,
    cart,
  });
};
