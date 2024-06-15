import { useEffect, useState } from 'react';
import type { Gadget } from '../../../types/gadget';
import classes from './PhotoBlock.module.scss';

type Props = {
  product: Gadget;
  ident: string;
};

export const PhotosBlock: React.FC<Props> = ({ product, ident }) => {
  const images = product ? product.images : [];
  const [selectedPhoto, setSelectedPhoto] = useState<string>('');

  useEffect(() => {
    if (product && product.images.length > 0) {
      setSelectedPhoto(product.images[0]);
    }
  }, [product]);

  const handleImageClick = (image: string) => {
    setSelectedPhoto(image);
  };

  return (
    <div className={classes.container}>
      <div className={classes.photoOfProduct}>
        <img src={selectedPhoto} alt={ident} className={classes.photo} />
      </div>

      <div className={classes.smallPhotosContainer}>
        {images.map((image: string) => {
          return (
            <button
              key={image}
              className={classes.smallPhotoContainer}
              onClick={() => handleImageClick(image)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleImageClick(image);
                }
              }}
            >
              <img src={image} alt={image} className={classes.smallPhoto} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
