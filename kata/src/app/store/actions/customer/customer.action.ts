import { Customer } from './../../../models/customer/customer.model';
import { ActionsTypes } from './customer.action.types';
import { Action } from '@ngrx/store';
export class GetCusomer implements Action {
  type = ActionsTypes.GET_CUSTOMER;
  constructor(
    public payload: {
      customer: Customer;
    }
  ) {}
}
export type All = GetCusomer;
