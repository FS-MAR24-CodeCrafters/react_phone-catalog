import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getGoods } from '../api/goods';
import { Product } from '../types/product';

type PaginatedProducts = {
  products: Product[];
  total: number;
}

export const useProductReqHandler = () => {
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<PaginatedProducts | null>(null);
  const [searchParams] = useSearchParams();

  const { pathname } = useLocation();

  let path = 'products';

  // add category
  if (pathname) {
    path += `/?category=${pathname.slice(1)}`;
  }

  // add search params to the pathname
  let restPath = '';

  if (searchParams.size) {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of searchParams.entries()) {
      if (!key || !value) {
        break;
      }

      if (pathname && !restPath.length) {
        restPath += '&';
      }

      if (!pathname) {
        restPath += '/?';
      }

      if (restPath.length) {
        restPath += '&';
      }

      restPath += `${key}=${value}`;
    }
  }

  useEffect(() => {
    setLoading(true);

    getGoods<PaginatedProducts>(`${path}${restPath}`)
      .then((res) => {
        setProducts(res);
      })
      .catch(() => {
        setError(true);
        setOpenModal(true);
      })
      .finally(() => setLoading(false));
  }, [error, path, restPath]);

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
