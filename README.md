# pjkarels.github.io

Source for [pjkarels.github.io](https://pjkarels.github.io), Paul Karels's portfolio. Built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions.

## Editing

| What | Where |
| --- | --- |
| Name, pitch, email, LinkedIn, GitHub | `src/site.config.ts` |
| Case studies and projects | `src/content/work/*.mdx` (frontmatter schema in `src/content.config.ts`) |
| Home page sections (strengths, experience) | `src/pages/index.astro` |
| Colors and typography | `src/styles/global.css` (tokens on `:root`, dark mode below) |
| Résumé PDF | `public/Paul_Karels_Resume.pdf` |

To add a project, create a new `.mdx` file in `src/content/work/`. It appears on the home page, ordered by `order`. Set `draft: true` to hide it.

## Local development

Requires Node 22.12 or later.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check, then build into dist/
npm run preview   # serve the built site
```

## Deploying

Every push to `main` runs `.github/workflows/deploy.yml`. One-time setup: in the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
