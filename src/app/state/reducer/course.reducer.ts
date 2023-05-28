import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset ,update,UpdateAction,UpdateActionTypes} from '../action/course.actions'

export const initialState = 0;
export const initialStateData = "Empty";

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0),
);

export const updateData = createReducer(
  initialStateData,
  on(update, (state) => state)
);

export function updateDataReducer(state = initialStateData, action : UpdateAction){
  switch(action.type){
    case UpdateActionTypes.UpdateDataActionType :
      return 
        "initialStateData" + state;
      default:
        return state
  }
}