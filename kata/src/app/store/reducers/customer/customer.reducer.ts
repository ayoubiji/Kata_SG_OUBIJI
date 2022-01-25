import { initialState } from './../../states/main.state';
import { Customer } from 'src/app/models/customer/customer.model';
import * as CustomerActions from '../../actions/customer';
import createReducer from '../createReducer';
export type Action = CustomerActions.All;
export function CustomerRedcuer(
  incomingState: Customer = initialState.customer,
  incomingAction: Action
) {
  return createReducer({
    [CustomerActions.ActionsTypes.GET_CUSTOMER]: (
      state: Customer,
      action: CustomerActions.GetCusomer
    ) => {
      return action.payload.customer;
    },
  })(incomingState, incomingAction);
}
