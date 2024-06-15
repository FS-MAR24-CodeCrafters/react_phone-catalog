export type FavoutiteState = string;

export enum FavouritesActionsName {
  'Add' = 'addToFavourite',
  'Remove' = 'removeFavourite',
}

export type FavoutiteActions =
  | { type: FavouritesActionsName.Add; payload: string }
  | { type: FavouritesActionsName.Remove; payload: string };
