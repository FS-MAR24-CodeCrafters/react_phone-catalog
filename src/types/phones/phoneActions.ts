import { Phone } from './phone';

export enum ActionsName {
  initialAction = 'initialAction',
  loadingAction = 'loadingAction',
}

export type phoneActions =
  | { type: ActionsName.initialAction; payload: Phone[] }
  | { type: ActionsName.loadingAction; payload: boolean };
