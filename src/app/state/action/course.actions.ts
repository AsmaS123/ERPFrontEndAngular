import { createAction, Action } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const update = createAction('[Counter Component] Update');

export enum UpdateActionTypes {
    UpdateDataActionType = '[UpdateActionType] Update'
  }

export class UpdateAction implements Action
{
    type = UpdateActionTypes.UpdateDataActionType;
    constructor(public payload: { updateData: any }) {}
}

