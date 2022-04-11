export const createSrc = (
  srcInfo: { path: string; extension: string },
  size: string
) => `${srcInfo.path}/${size}.${srcInfo.extension}`;
