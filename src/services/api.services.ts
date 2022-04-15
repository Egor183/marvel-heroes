import axios, { AxiosInstance } from "axios";
import {
  API_METHODS,
  API_ROUTES,
  PUBLIC_KEY,
  hash,
  ts,
} from "./../constants/api.constants";

const api: AxiosInstance & { [key: string]: any } = axios.create({
  baseURL: API_ROUTES.BASE_URL,
  params: {
    ts,
    apikey: PUBLIC_KEY,
    hash,
  },
});

const makeRequest = async (
  url: string,
  method: string = API_METHODS.GET,
  params: { [key: string]: any }
) => {
  const data = await api[method](url, {
    params: { ...params },
  });

  return data;
};

export default makeRequest;
