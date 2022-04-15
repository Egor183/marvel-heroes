import type { NextPage } from "next";
import wrapper from "redux/store";
import { setError } from "redux/action-creators/error.action-creators";
import { selectMarvelHeroes } from "redux/selectors/marvel-heroes.selectors";
import { loadMarvelHeroes } from "redux/thunk-creators/marvel-heroes.thunk-creators";
import { MarvelHeroesActionType } from "types/redux-actions.types";
import Home from "components/HomePage";

const HomePage: NextPage = () => {
  return <Home />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch, getState }) =>
    async () => {
      try {
        const marvelHeroes = selectMarvelHeroes(getState());

        if (marvelHeroes.length) {
          return { props: {} };
        }

        await dispatch(loadMarvelHeroes() as unknown as MarvelHeroesActionType);
      } catch (e) {
        dispatch(setError(true));
      } finally {
        return {
          props: {},
        };
      }
    }
);

export default HomePage;
