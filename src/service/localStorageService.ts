import { KEY } from '../constants/key';
import { Product } from '../types/product';

export const localStorageService = (key: KEY) => {
  const getItem = (): Product[] => {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : [];
  };

  const setItem = (data: Product[]) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const removeItem = (id: string) => {
    const data = getItem();
    const newData = data.filter((item) => item.itemId !== id);

    setItem(newData);
  };

  return { getItem, removeItem, setItem };
};
