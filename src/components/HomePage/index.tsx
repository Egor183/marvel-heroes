import React, { memo } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { selectLoaderState } from "redux/selectors/loader.selectors";
import { IMAGE_RESOLUTIONS } from "constants/avatar.constants";
import { useMarvelHeroes } from "hooks/useMarvelHeroes";
import { MarvelHeroRenderItemType } from "types/marvel-heroes.types";
import MainLayout from "components/MainLayout";
import Loader from "components/Loader";
import { createSrc } from "helpers/avatar.helpers";
import Hero from "../Hero";

import styles from "./styles.module.css";

const Home = () => {
  const { marvelHeroes } = useMarvelHeroes();
  const isLoading = useSelector(selectLoaderState);

  return (
    <MainLayout title="Marvel heroes">
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        marvelHeroes.map((item: MarvelHeroRenderItemType) => (
          <Link passHref href={`/${item.id}`} key={item.id}>
            <a>
              <Hero
                name={item.name}
                description={item.description}
                src={createSrc(
                  item.thumbnail,
                  IMAGE_RESOLUTIONS.STANDARD_LARGE
                )}
              />
            </a>
          </Link>
        ))
      )}
    </MainLayout>
  );
};

export default memo(Home);
