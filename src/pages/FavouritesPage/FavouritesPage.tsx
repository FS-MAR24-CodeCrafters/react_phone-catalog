import { useEffect, useState } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { SecondarySlider } from '../../components/Sliders/SecondarySlider';
import { getGoods } from '../../api/goods';
import { Phone } from '../../types/phones/phone';

export const FavouritesPage = () => {
  const [products, setProducts] = useState<Phone[]>([]);

  useEffect(() => {
    getGoods<Phone[]>('phones.json').then((res) => {
      setProducts(res.filter((item, index) => index <= 4));
    });
  }, []);

  return (
    <div style={{ paddingInline: '20px' }}>
      <BreadCrumbs />

      <SecondarySlider title="Brand New Models" products={products} />
    </div>
  );
};
