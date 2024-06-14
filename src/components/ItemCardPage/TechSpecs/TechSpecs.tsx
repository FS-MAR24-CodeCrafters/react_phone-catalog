import { Gadget } from '../../../types/gadget';
import classes from './TechSpecs.module.scss';

type Props = {
  product: Gadget;
};

export const TechSpecs: React.FC<Props> = ({ product }) => {
  return (
    <div className={classes.techSpecsAbout}>
      <div className={classes.line}>
        <h2 className={classes.techSpecs}>TechSpecs</h2>
      </div>
      <div className={classes.characteristicsContainer}>
        <p className={classes.techSpecsName}>Screen</p>
        <p className={classes.techSpecsValue}>{product.screen}</p>
      </div>
      <div className={classes.characteristicsContainer}>
        <p className={classes.techSpecsName}>Resolution</p>
        <p>{product.resolution}</p>
      </div>
      <div className={classes.characteristicsContainer}>
        <p className={classes.techSpecsName}>Processor</p>
        <p>{product.processor}</p>
      </div>
      <div className={classes.characteristicsContainer}>
        <p className={classes.techSpecsName}>RAM</p>
        <p>{product.ram}</p>
      </div>
      <div className={classes.characteristicsContainer}>
        <p className={classes.techSpecsName}>Built in memory</p>
        <p>{product.capacity}</p>
      </div>
      {product.camera && (
        <div className={classes.characteristicsContainer}>
          <p className={classes.techSpecsName}>Camera</p>
          <p>{product.camera}</p>
        </div>
      )}
      {product.zoom && (
        <div className={classes.characteristicsContainer}>
          <p className={classes.techSpecsName}>Zoom</p>
          <p>{product.zoom}</p>
        </div>
      )}
      <div className={classes.characteristicsContainer}>
        <p className={classes.techSpecsName}>Cell</p>
        <p>{product.cell[0]}</p>
      </div>
    </div>
  );
};
