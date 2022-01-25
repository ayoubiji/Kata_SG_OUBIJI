import { operation } from './../../models/operation/operation.model';
import { Customer } from './../../models/customer/customer.model';
export interface MainState {
  customer: Customer;
  operations: operation[];
}
export const initialState: MainState = {
  operations: [],
  customer: {
    firstname: null,
    lastName: null,
    account: {
      balance: 0,
      amount: 0,
      date: null,
    },
  },
};
