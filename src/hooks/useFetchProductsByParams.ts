import { useEffect, useState } from 'react';
import { getGoods } from '../api/goods';
import { Product } from '../types/product';
import { paths } from '../constants/paths';

type Response = {
  success: boolean;
  products: Product[];
};

type Parameters = {
  sortBy: string;
  order: string;
};

export const useFetchProductsByParams = ({ sortBy, order }: Parameters) => {
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);

    getGoods<Response>(`${paths.main.products}/${paths.secondary.slider}?sortBy=${sortBy}&order=${order}`)
      .then((res) => {
        setProducts(res.products);
      })
      .catch(() => {
        setError(true);
        setOpenModal(true);
      })
      .finally(() => setLoading(false));
  }, [error, order, sortBy]);

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
