import { createContext, useReducer } from 'react';
import { CartActions, CartState } from '../../types/cart/cartState';
import { сartReducer } from './cartReducer';

const initialState: CartState[] = [];

export const CartStateContext = createContext(initialState);

export const CartDispatchContext = createContext((
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  _actions: CartActions,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
) => { });

type Props = {
  children: React.ReactNode;
};

export const CartGlobalProvider: React.FC<Props> = ({ children }) => {
  const [cart, dispatch] = useReducer(сartReducer, initialState);

  return (
    <CartStateContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};
