import React, { memo } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";
import MainLayout from "components/MainLayout";
import Avatar from "components/Avatar";
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
      <p className={styles.marginTop}>
        {hero.description ? hero.description : NO_DESCRIPTION}
      </p>
    </MainLayout>
  );
};

export default memo(Hero);
