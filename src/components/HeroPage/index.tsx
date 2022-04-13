import React, { memo } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";
import MainLayout from "components/MainLayout";
import Avatar from "components/Avatar";
import List from "components/List";
import { IMAGE_RESOLUTIONS, IMAGE_SIZES } from "constants/avatar.constants";
import { NO_DESCRIPTION } from "constants/global.constants";
import { selectMarvelHero } from "redux/selectors/marvel-heroes.selectors";
import { MarvelHeroPageType } from "types/marvel-heroes.types";
import { createSrc } from "helpers/avatar.helpers";

import styles from "./styles.module.css";

const Hero: React.FC<MarvelHeroPageType> = ({ heroId }) => {
  const hero = useSelector((state) => selectMarvelHero(state, heroId));

  if (!hero) {
    return null;
  }

  return (
    <MainLayout title="Marvel hero">
      <div className={styles.contentContainer}>
        <h3 className={cn(styles.name, styles.marginTop)}>{hero.name}</h3>
        <div className={cn(styles.imageWrapper, styles.marginTop)}>
          {
            <Avatar
              src={createSrc(
                hero.thumbnail,
                IMAGE_RESOLUTIONS.STANDARD_FANTASTIC
              )}
              alt={hero.name}
              width={IMAGE_SIZES[IMAGE_RESOLUTIONS.STANDARD_FANTASTIC]}
              height={IMAGE_SIZES[IMAGE_RESOLUTIONS.STANDARD_FANTASTIC]}
            />
          }
        </div>
        <div>
          <h4 className={styles.description}>Description</h4>
          <p className={styles.marginTop}>
            {hero.description ? hero.description : NO_DESCRIPTION}
          </p>
        </div>
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
