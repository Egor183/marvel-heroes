import React from "react";
import { IMAGE_RESOLUTIONS } from "constants/global.constants";
import { useMarvelHeroes } from "hooks/useMarvelHeroes";
import { MarvelHeroRenderItemType } from "types/marvel-heroes.types";
import MainLayout from "components/MainLayout";
import Hero from "../Hero";

export const Home = () => {
  const { marvelHeroes } = useMarvelHeroes();

  return (
    <MainLayout title="Marvel heroes">
      <div>
        {marvelHeroes.map((item: MarvelHeroRenderItemType) => (
          <Hero
            key={item.id}
            name={item.name}
            description={item.description}
            src={`${item.thumbnail.path}/${IMAGE_RESOLUTIONS.STANDARD_LARGE}.${item.thumbnail.extension}`}
          />
        ))}
      </div>
    </MainLayout>
  );
};
