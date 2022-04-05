import { createStore, combineReducers } from "redux";
import { marvelHeroesReducer } from "../reducers/marvel-heroes.reducer";
import { loadingReducer } from "../reducers/loading.reducer";
import { errorReducer } from "redux/reducers/error.reducer";

const rootReducer = combineReducers({
  marvelHeroes: marvelHeroesReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default createStore(rootReducer);
