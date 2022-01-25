import { ActionReducerMap } from '@ngrx/store';
import { MainState } from './../states/main.state';
import { CustomerRedcuer } from './customer/customer.reducer';
export const reducers: ActionReducerMap<MainState> = {
  customer: CustomerRedcuer,
  operations: null,
};
