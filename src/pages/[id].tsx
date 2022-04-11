import type { NextPage } from "next";
import { useRouter } from "next/router";
import Hero from "components/HeroPage";

const HeroPage: NextPage = () => {
  const router = useRouter();

  return <Hero heroId={Number(router.query.id)} />;
};

export default HeroPage;
