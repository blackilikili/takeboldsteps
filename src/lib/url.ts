// Prefix a site path with the configured base (e.g. /takeboldsteps), with exactly one slash between.
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
