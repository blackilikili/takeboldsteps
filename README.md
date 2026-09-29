# Steps Training & Events website

The website for **Steps Training & Events**, built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321/takeboldsteps/
npm run build    # production build into dist/
```

## Where things live

| What | File |
| --- | --- |
| Brand colours and fonts | `src/styles/global.css` |
| Logo | `src/components/Logo.astro` (add `public/logo.png` and set `useImage = true`) |
| Header and footer | `src/components/` |
| Pages | `src/pages/` (`index`, `about`, `services`, `contact`) |
| Contact email | `src/pages/contact.astro` |
| Photos | `src/data/photos.ts` (free Unsplash photos; swap in your own from `public/photos/`) |

## Deploying

Pushing to `main` builds and deploys the site through `.github/workflows/deploy.yml`.
Before the first deploy, go to **Settings → Pages** in the repo and set **Source** to **GitHub Actions**.
The site will then be live at https://blackilikili.github.io/takeboldsteps/.
