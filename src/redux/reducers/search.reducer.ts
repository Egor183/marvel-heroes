import {
  FINISH_SEARCH,
  HANDLE_REQUEST,
  START_SEARCH,
} from "redux/actions/search.actions";
import { SearchActionType } from "types/redux-actions.types";
import { InitialStateSearchReducerType } from "types/redux-reducers.types";

const initialState: InitialStateSearchReducerType = {
  loading: false,
  results: [],
  value: "",
  isRequestAvailable: true,
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

    case HANDLE_REQUEST:
      return { ...state, isRequestAvailable: action.payload };

    default:
      return state;
  }
};
