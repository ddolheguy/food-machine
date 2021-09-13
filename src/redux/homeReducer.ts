import { createReducer } from 'typesafe-actions';
import {
  HomeActions,
  onUploadFood,
} from './homeAction';

export const defaultState: any = {
  foodItem: {},
};

const reducer = createReducer<
  any,
  HomeActions
>(defaultState)
  .handleAction(onUploadFood, (state, action) => {
    return {
      foodItem: action.payload,
    };
  });

export default reducer;
