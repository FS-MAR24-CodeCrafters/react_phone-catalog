import { useEffect, useState } from 'react';
import { getGoods } from '../api/goods';
import { Product } from '../types/product';

export const useProductReqHandler = () => {
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    getGoods<Product[]>('products.json')
      .then((res) => {
        setProducts(res);
      })
      .catch(() => {
        setError(true);
        setOpenModal(true);
      })
      .finally(() => setLoading(false));
  }, [error]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (openModal) {
      timer = setTimeout(() => {
        setOpenModal(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [openModal]);

  return {
    products,
    openModal,
    error,
    setError,
    setOpenModal,
    loading,
  };
};
