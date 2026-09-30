# Steps Training & Events website

The website for **Steps Training & Events**, built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321/
npm run build    # production build into dist/
```

## Where things live

| What | File |
| --- | --- |
| Brand colours and fonts | `src/styles/global.css` |
| Logo | `src/components/Logo.astro` (add `public/logo.png` and set `useImage = true`) |
| Header and footer | `src/components/` |
| Pages | `src/pages/` (`index`, `about`, `services`, `contact`) |
| Contact email | `src/data/site.ts` |
| Photos | `src/data/photos.ts` (free Unsplash photos; swap in your own from `public/photos/`) |

## Deploying

Pushing builds and deploys the site through `.github/workflows/deploy.yml`.
In the repo, **Settings → Pages → Source** must be set to **GitHub Actions**.

The address comes from the repository name (see `astro.config.mjs`):
a repo called `stepstraining.github.io` in the `stepstraining` organization is served at
https://stepstraining.github.io/.
