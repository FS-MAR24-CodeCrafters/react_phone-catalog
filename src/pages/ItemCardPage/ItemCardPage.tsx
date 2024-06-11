import { useEffect } from 'react';
import { getGoods } from '../../api/goods';
import { Gadget } from '../../types/gadget';

export const ItemCardPage = () => {
  useEffect(() => {
    const phones = getGoods<Gadget[]>('phones.json');
    const tablets = getGoods<Gadget[]>('tablets.json');
    const accessories = getGoods<Gadget[]>('accessories.json');

    Promise.all([phones, tablets, accessories]).then((values) => {
      const colors = new Set<string>();

      values.forEach((value) => {
        value.forEach((item) => {
          colors.add(item.color);
        });
      });

      const arrColor = [...colors];

      const colorsObj = {};

      arrColor.forEach((color) => {
        colorsObj[color] = '';
      });

      window.console.log(colorsObj);
    });
  }, []);

  return <h1>ItemCard works</h1>;
};
