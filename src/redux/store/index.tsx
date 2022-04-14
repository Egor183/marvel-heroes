import { createStore, combineReducers } from "redux";
import { createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import { RootStateOrAny } from "react-redux";
import { MainActionType } from "types/redux-actions.types";
import { marvelHeroesReducer } from "../reducers/marvel-heroes.reducer";
import { loadingReducer } from "../reducers/loading.reducer";
import { errorReducer } from "../reducers/error.reducer";
import { searchReducer } from "../reducers/search.reducer";

const combinedReducer = combineReducers({
  marvelHeroes: marvelHeroesReducer,
  loading: loadingReducer,
  error: errorReducer,
  search: searchReducer,
});

const rootReducer = (state: RootStateOrAny, action: MainActionType) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };

    if (state.marvelHeroes.marvelHeroesList.length) {
      nextState.marvelHeroes.marvelHeroesList =
        state.marvelHeroes.marvelHeroesList;
    }

    return nextState;
  }

  return combinedReducer(state, action);
};

const store = createStore(rootReducer);

const makeStore: MakeStore<typeof store> = () => store;

export default createWrapper(makeStore);
