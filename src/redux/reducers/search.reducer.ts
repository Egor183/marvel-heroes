import {
  CLEAN_VALUE,
  FINISH_SEARCH,
  START_SEARCH,
} from "redux/action-types/search.action-types";
import { SearchActionType } from "types/redux-actions.types";
import { InitialStateSearchReducerType } from "types/redux-reducers.types";

const initialState: InitialStateSearchReducerType = {
  loading: false,
  results: [],
  value: "",
};

export const searchReducer = (
  state = initialState,
  action: SearchActionType
) => {
  switch (action.type) {
    case CLEAN_VALUE:
      return initialState;
    case START_SEARCH:
      return { ...state, loading: true, value: action.payload.value };
    case FINISH_SEARCH:
      return { ...state, loading: false, results: action.payload.results };

    default:
      return state;
  }
};
