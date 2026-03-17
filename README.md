# yichinglee.github.io

Personal portfolio website for Yi-Ching Lee, a CS PhD student researching interactive intelligence for healthcare.

Current project-site URL: `https://yichingleee.github.io/yichinglee.github.io/`
Target root-site URL after migration: `https://yichingleee.github.io/`

## Stack

- React 19 + TypeScript
- Vite 6
- GitHub Pages via GitHub Actions

## Design

Brutalist modern aesthetic with monospace typography, hard edges, a monochromatic palette with electric blue accents, and a generative canvas backdrop of animated ribbon flows. See [`docs/DESIGN_CONCEPT.md`](docs/DESIGN_CONCEPT.md).

## Structure

```text
components/     React section components
data/           Static content
assets/         Images
docs/           Design documentation
```

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

The Vite base path is inferred automatically from `GITHUB_REPOSITORY`:

- `yichingleee/yichingleee.github.io` builds for `/`
- any other repo builds for `/<repo-name>/`

You can override this manually with `VITE_BASE_PATH=/custom-path/ npm run build`.

## Migration To Root Pages Repo

1. Push this codebase to `yichingleee/yichingleee.github.io`.
2. Keep the existing GitHub Actions Pages workflow.
3. After the first successful deploy, the site will resolve at `https://yichingleee.github.io/`.
