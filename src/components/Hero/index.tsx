import React, { memo } from "react";
import { IMAGE_RESOLUTIONS, IMAGE_SIZES } from "constants/avatar.constants";
import { NO_DESCRIPTION } from "constants/global.constants";
import { MarvelHeroType } from "types/marvel-heroes.types";
import Avatar from "components/Avatar";

import styles from "./styles.module.css";

const Hero: React.FC<MarvelHeroType> = ({ src, name, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {
          <Avatar
            src={src}
            alt={name}
            width={IMAGE_SIZES[IMAGE_RESOLUTIONS.STANDARD_LARGE]}
            height={IMAGE_SIZES[IMAGE_RESOLUTIONS.STANDARD_LARGE]}
            style={{ borderRadius: "50%" }}
          />
        }
      </div>
      <div className={styles.heroInformation}>
        <h3>{name}</h3>
        <p>{description ? description : NO_DESCRIPTION}</p>
      </div>
    </div>
  );
};

export default memo(Hero);
