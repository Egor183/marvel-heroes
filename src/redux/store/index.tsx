import { createStore, combineReducers, applyMiddleware, Action } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import { marvelHeroesReducer } from "../reducers/marvel-heroes.reducer";
import { loadingReducer } from "../reducers/loading.reducer";
import { errorReducer } from "../reducers/error.reducer";
import { searchReducer } from "../reducers/search.reducer";

const rootReducer = combineReducers({
  marvelHeroes: marvelHeroesReducer,
  loading: loadingReducer,
  error: errorReducer,
  search: searchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
const makeStore: MakeStore<typeof store> = () => store;

type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export default createWrapper<AppStore>(makeStore);
