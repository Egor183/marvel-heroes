import { LoadingActionType } from "types/redux-actions.types";
import { InitialStateLoadingReducerType } from "types/redux-reducers.types";
import { SET_LOADING } from "../actions/loading.actions";

const initialState: InitialStateLoadingReducerType = {
  isLoading: false,
};

export const loadingReducer = (
  state = initialState,
  action: LoadingActionType
) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
