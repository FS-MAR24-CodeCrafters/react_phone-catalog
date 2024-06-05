import { ActionsName, phoneActions } from '../../types/phones/phoneActions';
import { StatePhones } from '../../types/phones/statePhones';

export const phoneReducer = (state: StatePhones, action: phoneActions) => {
  switch (action.type) {
    case ActionsName.initialAction: {
      return {
        ...state,
        phones: action.payload,
      };
    }

    case ActionsName.loadingAction: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
