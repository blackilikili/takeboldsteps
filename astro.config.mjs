// @ts-check
import { defineConfig } from 'astro/config';

// Work out the GitHub Pages address from the repository being built, so the site
// keeps working if the repo is moved or renamed:
//   stepstraining/stepstraining.github.io -> https://stepstraining.github.io/
//   blackilikili/takeboldsteps            -> https://blackilikili.github.io/takeboldsteps/
// GITHUB_REPOSITORY is set automatically in GitHub Actions; local builds use the org site.
// If you add a custom domain later, set `site` to it and `base` to '/'.
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? 'stepstraining/stepstraining.github.io')
  .toLowerCase()
  .split('/');
const isRootSite = repo === `${owner}.github.io`;

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: isRootSite ? '/' : `/${repo}`,
});
