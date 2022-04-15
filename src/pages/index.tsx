import type { NextPage } from "next";
import wrapper from "redux/store";
import { selectMarvelHeroes } from "redux/selectors/marvel-heroes.selectors";
import { loadMarvelHeroes } from "redux/thunk-creators/marvel-heroes.thunk-creators";
import Home from "components/HomePage";

const HomePage: NextPage = () => {
  return <Home />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch, getState }) =>
    async () => {
      const marvelHeroes = selectMarvelHeroes(getState());

      if (marvelHeroes.length) {
        return { props: {} };
      }

      await dispatch(loadMarvelHeroes() as any);

      return {
        props: {},
      };
    }
);

export default HomePage;
