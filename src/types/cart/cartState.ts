import { Product } from '../product';

export type CartState = {
  id: string;
  quantity: number;
};

export type FilledCartState = {
  item: Product;
  quantity: number;
};

export enum ActionsName {
  'Add' = 'addToCart',
  'Remove' = 'removeFromCart',
  'Inc' = 'incCount',
  'Dec' = 'decCount',
  'ClearAll' = 'clearAll',
}

export type CartActions =
  | { type: ActionsName.Add; payload: CartState }
  | { type: ActionsName.Remove; payload: string }
  | { type: ActionsName.Inc; payload: string }
  | { type: ActionsName.Dec; payload: string }
  | { type: ActionsName.ClearAll };
