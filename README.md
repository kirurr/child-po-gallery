# child po gallery

A gallery of child po. That's the whole thing.

![child po](docs/child_po.jpg)

Look at them all: **https://kirurr.github.io/child-po-gallery/**

## Run it locally

```sh
pnpm install
pnpm generateGallery   # measures every image in public/images/ (any format) -> public/gallery.json
pnpm dev
```

`pnpm generateGallery` has to run at least once, otherwise the gallery is just a very fast empty page. `pnpm build` for a production bundle.

Vue 3 + Vite + Tailwind 4, `justified-layout` for the rows, `sharp` for reading image sizes. Deployed to GitHub Pages on every push to `master`.

Want to add a po? See [CONTRIBUTING.md](CONTRIBUTING.md). MIT licensed, as all child po should be.
