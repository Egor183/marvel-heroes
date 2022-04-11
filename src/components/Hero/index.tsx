import Image from "next/image";
import React, { memo, useCallback } from "react";
import avatar from "assets/avatar.png";
import { IMAGE_RESOLUTIONS, IMAGE_SIZES } from "constants/global.constants";
import styles from "./styles.module.css";

const Hero = ({
  src,
  name,
  description,
}: {
  src: string;
  name: string;
  description: string;
}) => {
  const handleLoader = useCallback(() => src, [src]);

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {
          <Image
            src={src || avatar}
            alt={name}
            width={IMAGE_SIZES[IMAGE_RESOLUTIONS.STANDARD_LARGE]}
            height={100}
            loader={src ? handleLoader : undefined}
            style={{ borderRadius: "50%" }}
          />
        }
      </div>
      <div className={styles.heroInformation}>
        <h3>{name}</h3>
        <p>{description ? description : "No description."}</p>
      </div>
    </div>
  );
};

export default memo(Hero);
