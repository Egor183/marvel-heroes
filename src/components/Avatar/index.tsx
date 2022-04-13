import Image, { ImageProps } from "next/image";
import React, { memo, useCallback } from "react";
import avatar from "assets/avatar.png";

const Avatar: React.FC<ImageProps> = ({ src, alt, width, height, style }) => {
  const handleLoader = useCallback(
    () => `${src}?w=${width}` as string,
    [src, width]
  );

  return (
    <Image
      src={src || avatar}
      alt={alt}
      width={width}
      height={height}
      loader={src ? handleLoader : undefined}
      style={style}
    />
  );
};

export default memo(Avatar);
