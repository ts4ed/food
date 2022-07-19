import { useEffect, useState } from 'react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { fetchProducts } from '../api/api';
import Shops from './Shops/ShopsNav/Shops';
import Order from './Order/Order/Order';
import BigMama from 'components/Shops/BigMama/BigMama';
import MamaMia from 'components/Shops/MamaMia/MamaMia';
import KFC from 'components/Shops/KFC/KFC';
import EasyShop from 'components/Shops/EasyShop/EasyShop';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { Nav, Links } from './App.styled';
import s from './styles.module.css';

export default function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [food, setFood] = useState([]);
  const [cart, setCart] = useLocalStorage([]);

  useEffect(() => {
    setTotalPrice(
      cart.reduce((prev, curr) => prev + Number(curr.price) * curr.count, 0)
    );
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchListFood = async () => {
      try {
        const foods = await fetchProducts();
        setFood(foods);
      } catch (error) {
        toast.error(error);
      } finally {
      }
    };
    fetchListFood();
  }, []);

  const addToCart = item => {
    const isItem = cart.find(c => c.id === item._id);
    if (isItem) {
      increment(item._id);
      toast.success(`Item added`);
      return;
    }
    setCart([
      {
        id: item._id,
        title: item.title,
        picture: item.picture,
        price: item.price,
        count: 1,
      },
      ...cart,
    ]);
    toast.success(`Item added`);
  };

  const deleteProduct = id => {
    setCart(cart => cart.filter(c => c.id !== id));
    toast.info(`Item deleted`);
  };

  const increment = id => {
    setCart(cart =>
      cart.map(c => {
        if (c.id === id) {
          return {
            ...c,
            count: c.count + 1,
          };
        }
        return c;
      })
    );
  };
  const decrement = id => {
    setCart(cart =>
      cart.map(c => {
        if (c.id === id) {
          if (c.count <= 1) {
            deleteProduct(id);
          }
          return {
            ...c,
            count: c.count - 1,
          };
        }
        return c;
      })
    );
  };

  return (
    <div>
      <header>
        <Nav>
          <Link to="/shops" className={s.link}>
            <Links>Shops</Links>
          </Link>
          <Link to="/order" className={s.link}>
            <Links>Order</Links>
          </Link>
        </Nav>
      </header>
      <Routes>
        <Route path="/shops" element={<Shops />}>
          <Route
            path="bigmama"
            element={<BigMama food={food} onAdd={addToCart} />}
          />
          <Route
            path="mamamia"
            element={<MamaMia food={food} onAdd={addToCart} />}
          />
          <Route path="kfc" element={<KFC food={food} onAdd={addToCart} />} />
          <Route
            path="easyshop"
            element={<EasyShop food={food} onAdd={addToCart} />}
          />
        </Route>
        <Route
          path="/order"
          element={
            <Order
              cart={cart}
              deleteProduct={deleteProduct}
              increment={increment}
              decrement={decrement}
              totalPrice={totalPrice}
              setCart={setCart}
            />
          }
        />
        <Route path="*" element={<Navigate to="/shops" />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
