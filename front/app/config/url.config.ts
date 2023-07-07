export const getMovieUrl = (slug: string) => {
  return `/movie/${slug}`;
};

export const getGenreUrl = (slug: string) => {
  return `/genre/${slug}`;
};

export const getActorUrl = (slug: string) => {
  return `/actor/${slug}`;
};

export const getAdminUrl = (url: string) => {
  return `/manage/${url}`;
};

export const getAdminHomeUrl = () => {
  return getAdminUrl('').slice(0, -1);
};
