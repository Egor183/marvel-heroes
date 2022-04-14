import type { NextPage } from "next";
import wrapper from "redux/store";
import Home from "components/HomePage";
import api from "services/api.services";
import { API_ROUTES } from "constants/api.constants";
import { loadMarvelHeroes } from "redux/actions/marvel-heroes.actions";
import { setError } from "redux/actions/error.actions";
import { selectMarvelHeroes } from "redux/selectors/marvel-heroes.selectors";

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

        const data = await api.get(API_ROUTES.MARVEL_HEROES, {
          params: { offset: marvelHeroes.length },
        });
        const result = data?.data?.data?.results;

        if (!result) {
          return { props: {} };
        }

        dispatch(loadMarvelHeroes(result));
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
