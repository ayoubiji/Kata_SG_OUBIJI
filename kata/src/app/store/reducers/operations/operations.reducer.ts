import { operation } from './../../../models/operation/operation.model';
import { initialState } from './../../states/main.state';
import * as OperationsActions from '../../actions/operations';
import createReducer from '../createReducer';
export type Action = OperationsActions.All;
export function OperaytionsRedcuer(
  incomingState: operation[] = initialState.operations,
  incomingAction: Action
) {
  return createReducer({
    [OperationsActions.ActionsTypes.GET_OPERATIONS]: (
      state: operation[],
      action: OperationsActions.GetOperations
    ) => {
      return action.payload.operations;
    },
  })(incomingState, incomingAction);
}
