import axios from 'axios';

axios.defaults.baseURL = 'https://my-project100.herokuapp.com/api/';
axios.defaults.headers.common.Authorization = `Bearer 8d0f5eca-c94d-4f06-b754-96178190577f`;
axios.defaults.headers.common.Accept = 'application/vnd.heroku+json; version=3';

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
// 8d0f5eca-c94d-4f06-b754-96178190577f
