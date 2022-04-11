import React, { memo } from "react";
import Link from "next/link";
import { IMAGE_RESOLUTIONS } from "constants/avatar.constants";
import { useMarvelHeroes } from "hooks/useMarvelHeroes";
import { MarvelHeroRenderItemType } from "types/marvel-heroes.types";
import MainLayout from "components/MainLayout";
import { createSrc } from "helpers/avatar.helpers";

import Hero from "../Hero";

const Home = () => {
  const { marvelHeroes } = useMarvelHeroes();

  return (
    <MainLayout title="Marvel heroes">
      <div>
        {marvelHeroes.map((item: MarvelHeroRenderItemType) => (
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
        ))}
      </div>
    </MainLayout>
  );
};

export default memo(Home);
