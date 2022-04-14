import React, { memo } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";
import MainLayout from "components/MainLayout";
import List from "components/List";
import { selectMarvelHero } from "redux/selectors/marvel-heroes.selectors";
import { MarvelHeroPageType } from "types/marvel-heroes.types";

import styles from "./styles.module.css";

const Hero: React.FC<MarvelHeroPageType> = ({ heroId }) => {
  const hero = useSelector((state) => selectMarvelHero(state, heroId));

  if (!hero) {
    return null;
  }

  return (
    <MainLayout title="Marvel hero">
      <div className={styles.contentContainer}>
        <h3
          className={cn(styles.name, styles.marginTop)}
        >{`${hero.name} additional information:`}</h3>

        <div className={styles.marginTop}>
          <List list={hero.comics.items} listName="Comics" />
        </div>
        <div className={styles.marginTop}>
          <List list={hero.stories.items} listName="Stories" />
        </div>
        <div className={styles.marginTop}>
          <List list={hero.events.items} listName="Events" />
        </div>
        <div className={styles.marginTop}>
          <List list={hero.series.items} listName="Series" />
        </div>
      </div>
    </MainLayout>
  );
};

export default memo(Hero);
