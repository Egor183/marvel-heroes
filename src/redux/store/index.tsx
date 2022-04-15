import { createStore, combineReducers } from "redux";
import { createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import { RootStateOrAny } from "react-redux";
import { MainActionType } from "types/redux-actions.types";
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

const store = createStore(rootReducer);
const makeStore: MakeStore<typeof store> = () => store;
type AppStore = ReturnType<typeof makeStore>;

export default createWrapper<AppStore>(makeStore);
