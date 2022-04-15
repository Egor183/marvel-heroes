import md5 from "md5";

export enum API_METHODS {
  GET = "get",
}

export enum API_ROUTES {
  BASE_URL = "https://gateway.marvel.com/",
  MARVEL_HEROES = "v1/public/characters",
}

export const PUBLIC_KEY = "85b365e6d886831fb88019651bacabbb";

const PRIVATE_KEY = "f04c80501d97f04f983e32ca324358a3a08ed191";

export const ts = Number(new Date());

export const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
