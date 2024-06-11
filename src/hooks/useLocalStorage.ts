import { useEffect, useState } from 'react';
import { KEY } from '../constants/key';
import { localStorageService } from '../service/localStorageService';
import { Product } from '../types/product';

export const useLocalStorage = () => {
  const { getItem } = localStorageService(KEY);
  const [products, setProducts] = useState<Product[]>(getItem());

  const updateProducts = () => {
    setProducts(getItem());
  };

  useEffect(() => {
    window.addEventListener('storage', updateProducts);

    return () => {
      window.removeEventListener('storage', updateProducts);
    };
  });

  return [products];
};
