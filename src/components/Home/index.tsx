import React, { useEffect } from "react";
import { API_METHODS, API_ROUTES } from "constants/api.constants";
import { useRequest } from "hooks/useRequest.hook";
import { MainLayout } from "../MainLayout";

export const Home = () => {
  const request = useRequest();

  useEffect(() => {
    (async () => {
      const { data } = await request(
        API_ROUTES.MARVEL_HEROES,
        API_METHODS.GET,
        {
          offset: 1,
        }
      );
    })();
  }, [request]);

  return (
    <MainLayout title="Marvel heroes">
      <div />
    </MainLayout>
  );
};
