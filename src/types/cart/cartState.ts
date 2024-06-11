import { Product } from '../product';

export type CartState = {
  name: Product,
  quantity: number,
};

export enum ActionsName {
  'Add' = 'addToCart',
  'Remove' = 'removeFromCart',
  'Inc' = 'incCount',
  'Dec' = 'decCount',
  'ClearAll' = 'clearAll',
}

export type CartActions =
  | { type: ActionsName.Add, payload: CartState }
  | { type: ActionsName.Remove, payload: number }
  | { type: ActionsName.Inc, payload: number }
  | { type: ActionsName.Dec, payload: number }
  | { type: ActionsName.ClearAll }
