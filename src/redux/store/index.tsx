import { createStore, combineReducers } from "redux";
import { marvelHeroesReducer } from "../reducers/marvel-heroes.reducer";
import { loadingReducer } from "../reducers/loading.reducer";
import { errorReducer } from "redux/reducers/error.reducer";
import { searchReducer } from "redux/reducers/search.reducer";

const rootReducer = combineReducers({
  marvelHeroes: marvelHeroesReducer,
  loading: loadingReducer,
  error: errorReducer,
  search: searchReducer,
});

export default createStore(rootReducer);
