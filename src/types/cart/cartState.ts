export type CartState = {
  'name': {
    'id': number,
    'category': string,
    'itemId': string,
    'name': string,
    'fullPrice': number,
    'price': number,
    'screen': string,
    'capacity': string,
    'color': string,
    'ram': string,
    'year': number,
    'image': string
  },
  quantity: number,
};

export enum ActionsName {
  'Add' = 'addToCart',
  'Remove' = 'removeFromCart',
  'Inc' = 'incCount',
  'Dec' = 'decCount',
}

export type CartActions =
  | { type: ActionsName.Add, payload: CartState }
  | { type: ActionsName.Remove, payload: number }
  | { type: ActionsName.Inc, payload: number }
  | { type: ActionsName.Dec, payload: number }
