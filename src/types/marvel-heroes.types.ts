export type MarvelHeroType = {
  name: string;
  src: string;
  description: string;
  id: number;
};

export type MarvelHeroRenderItemType = {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
};

export type MarvelHeroPageType = {
  heroId: number;
};

export type MarvelHeroesTypeList = MarvelHeroType[];
