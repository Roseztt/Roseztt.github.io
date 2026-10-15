# Roseztt.github.io

My personal website — About, Experience, Projects, and Writing on one scrolling page, with an animated wave.

Built with [Astro](https://astro.build) and hosted on GitHub Pages at https://roseztt.github.io.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Edit the content

- **About, experience, projects, links:** `src/data/profile.ts`
- **Blog posts:** add a Markdown file to `src/content/writing/`. The file name becomes the address (`my-post.md` → `/writing/my-post/`). Start it with:

  ```md
  ---
  title: My post
  date: 2026-10-20
  summary: One sentence that shows under the title.
  ---
  ```

  Add `draft: true` to hide a post until it's ready.
- **Colors (light and dark):** `src/styles/global.css`
- **The wave:** `src/components/Wave.astro`

## Publish

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
