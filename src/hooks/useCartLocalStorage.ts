import { useEffect, useState } from 'react';
import { KEY } from '../constants/key';
import { localStorageService } from '../service/localStorageService';
import { ActionsName, CartActions, CartState } from '../types/cart/cartState';

export type UpdateProducts = (action: CartActions) => void;

export const useCartLocalStorage = () => {
  const { getItem, setItem } = localStorageService<CartState[]>(KEY.cart);
  const [goodsInCart, setProducts] = useState<CartState[]>([]);

  const loadProducts = () => {
    setProducts(getItem());
  };

  useEffect(() => {
    loadProducts();
    window.addEventListener('storage', loadProducts);

    return () => {
      window.removeEventListener('storage', loadProducts);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateProducts: UpdateProducts = (action) => {
    const goods = getItem();
    let newState: CartState[] = [];

    switch (action.type) {
      case ActionsName.Add: {
        if (
          goods.some((product) => product.id === action.payload.id)
        ) {
          newState = goods.filter((product) => {
            return product.id !== action.payload.id;
          });

          break;
        }

        newState = [...goods, action.payload];

        break;
      }

      case ActionsName.Remove: {
        newState = goods.filter((product) => {
          return product.id !== action.payload;
        });

        break;
      }

      case ActionsName.Inc: {
        newState = goods.map((product) => {
          return product.id === action.payload ?
            { ...product, quantity: product.quantity + 1 } :
            product;
        });

        break;
      }

      case ActionsName.Dec: {
        newState = goods.map((product) => {
          return product.id === action.payload && product.quantity > 1 ?
            { ...product, quantity: product.quantity - 1 } :
            product;
        });

        break;
      }

      case ActionsName.ClearAll: {
        newState = [];

        break;
      }

      default:
        newState = goods;
    }

    setItem(newState);
    setProducts(newState);
  };

  return { goodsInCart, updateProducts };
};
