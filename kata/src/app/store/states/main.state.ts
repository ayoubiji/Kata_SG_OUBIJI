import { operation } from './../../models/operation/operation.model';
import { Customer } from './../../models/customer/customer.model';
export interface MainState {
  customer: Customer;
  operations: operation[];
}
export const initialState: MainState = {
  operations: [],
  customer: {
    firstname: 'Ayoub',
    lastName: 'Oubiji',
    account: {
      balance: 100,
      date: new Date(),
    },
  },
};
