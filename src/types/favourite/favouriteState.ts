import { Product } from '../product';

export type FavoutiteState = Product;

export enum FavouritesActionsName {
  'Add' = 'addToFavourite',
  'Remove' = 'removeFavourite',
}

export type FavoutiteActions =
  | { type: FavouritesActionsName.Add; payload: Product }
  | { type: FavouritesActionsName.Remove; payload: Product };
