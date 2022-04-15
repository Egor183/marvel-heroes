import { ErrorActionType } from "types/redux-actions.types";
import { InitialStateErrorReducerType } from "types/redux-reducers.types";
import { SET_ERROR } from "../actions/error.actions";

const initialState: InitialStateErrorReducerType = {
  hasError: false,
};

export const errorReducer = (state = initialState, action: ErrorActionType) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        hasError: action.payload,
      };

    default:
      return state;
  }
};
