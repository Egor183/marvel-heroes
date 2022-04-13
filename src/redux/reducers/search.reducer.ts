import {
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
    case START_SEARCH:
      return { ...state, loading: true, value: action.payload };

    case FINISH_SEARCH:
      return { ...state, loading: false, results: action.payload };

    default:
      return state;
  }
};
