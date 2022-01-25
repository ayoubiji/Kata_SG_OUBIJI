import { ActionsTypes } from './operations.action.types';
import { operation } from './../../../models/operation/operation.model';
import { Action } from '@ngrx/store';
export class GetOperations implements Action {
  type = ActionsTypes.GET_OPERATIONS;
  constructor(
    public payload: {
      operations: operation[];
    }
  ) {}
}
export type All = GetOperations;
