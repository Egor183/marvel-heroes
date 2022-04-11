export type MarvelHeroType = {
  name: string;
  avatar: string;
  description: string;
};

export type MarvelHeroRenderItemType = {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
};

export type MarvelHeroesTypeList = MarvelHeroType[];
