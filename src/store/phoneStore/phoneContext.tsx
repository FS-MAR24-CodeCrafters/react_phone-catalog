import React, { createContext, useReducer } from 'react';
import { StatePhones } from '../../types/phones/statePhones';
import { phoneActions } from '../../types/phones/phoneActions';
import { phoneReducer } from './phoneReducer';

const initialState: StatePhones = {
  phones: [],
  loading: false,
};

export const PhoneStateContext = createContext(initialState);

export const PhoneDispatchContext = createContext(
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  (_actions: phoneActions) => {},
);

type Props = {
  children: React.ReactNode;
};

export const PhoneGlobalProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(phoneReducer, initialState);

  return (
    <PhoneDispatchContext.Provider value={dispatch}>
      <PhoneStateContext.Provider value={state}>
        {children}
      </PhoneStateContext.Provider>
    </PhoneDispatchContext.Provider>
  );
};
