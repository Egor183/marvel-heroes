import axios, { AxiosInstance } from "axios";
import md5 from "md5";
import { API_ROUTES } from "./../constants/api.constants";

const PUBLIC_KEY = "85b365e6d886831fb88019651bacabbb";
const PRIVATE_KEY = "f04c80501d97f04f983e32ca324358a3a08ed191";

const ts = Number(new Date());

const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

const api: AxiosInstance & { [key: string]: any } = axios.create({
  baseURL: API_ROUTES.BASE_URL,
  params: {
    ts,
    apikey: PUBLIC_KEY,
    hash,
  },
});

export default api;
