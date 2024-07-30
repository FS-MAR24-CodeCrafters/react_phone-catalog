import { useEffect, useState } from 'react';
import { getGoods } from '../api/goods';
import { Product } from '../types/product';
import { paths } from '../constants/paths';

type Response = {
  success: boolean;
  products: Product[];
};

export const useFetchProductsByIDs = ({
  iDs,
  path,
}: {
  iDs: string;
  path: string;
}) => {
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (iDs.length) {
      setLoading(true);

      getGoods<Response>(`${paths.main.products}/${path}/${iDs}`)
        .then((res) => {
          setProducts(res.products);
        })
        .catch(() => {
          setError(true);
          setOpenModal(true);
        })
        .finally(() => setLoading(false));
    }
  }, [error, path, iDs]);

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
