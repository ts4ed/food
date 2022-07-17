import { useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  );

  return [state, setState];
};
