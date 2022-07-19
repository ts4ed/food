import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/';

export const fetchProducts = async () => {
  const response = await axios.get(`posts`);
  return response.data;
};

export const fetchOrder = async ({ name, email, phone, address, cart }) => {
  await axios.post(`orders`, {
    name,
    email,
    phone,
    address,
    cart,
  });
};
