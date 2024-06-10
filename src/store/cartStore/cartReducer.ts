import {
  CartActions,
  CartState,
  ActionsName,
} from '../../types/cart/cartState';

export const сartReducer = (
  state: CartState[],
  action: CartActions,
): CartState[] => {
  switch (action.type) {
    case ActionsName.Add:
      if (state.some((product) => product.name.id === action.payload.name.id)) {
        return state.filter((product) => {
          return product.name.id !== action.payload.name.id;
        });
      }

      return [...state, action.payload];

    case ActionsName.Remove:
      return state.filter((product) => {
        return product.name.id !== action.payload;
      });

    case ActionsName.Inc: {
      return state.map((product) => {
        return product.name.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      });
    }

    case ActionsName.Dec:
      return state.map((product) => {
        return product.name.id === action.payload && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });

    case ActionsName.ClearAll:
      return [];

    default:
      return state;
  }
};
