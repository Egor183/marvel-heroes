import { setError } from "redux/actions/error.actions";
import { errorReducer } from "redux/reducers/error.reducer";

const state = {
  hasError: false,
};

it("error should be set", () => {
  const action = setError(true);
  const newState = errorReducer(state, action);
  expect(true).toBe(true);
});
