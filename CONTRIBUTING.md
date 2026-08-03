# Contributing

I accept exactly one kind of pull request: **one that adds a new child po.**

That's it. Not a refactor, not dark mode, not tests, not i18n, not "I migrated this to a monorepo". A new child po.

## The one rule

The image must contain child po.

- Adult po — rejected.
- Some other panda — rejected.
- No po whatsoever — rejected, and honestly a little confusing.

Format doesn't matter — jpg, png, webp, avif, a gif of child po. Anything `sharp` can measure works.

## How

1. Put your image in `public/`.
2. Run `pnpm generateGallery` and `pnpm dev` to check it shows up.
3. Do **not** commit `public/gallery.json` — it's gitignored and CI regenerates it.
4. Open the PR.

## Review process

I look at it. Is that child po? Merged.
