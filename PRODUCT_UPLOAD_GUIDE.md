# Nodix Product Upload Guide

This site is designed so product media can be maintained without redesigning the pages.

## 1. Product images

Upload images to:

`public/images/products/`

Recommended files for each product:

- `product-name.jpg` — main product image
- `product-name-detail-01.jpg` — detail view
- `product-name-use-01.jpg` — in-use / application photo
- `product-name-contents.jpg` — kit contents (if applicable)
- `product-name-package.jpg` — packaging photo

Use lowercase letters, numbers and hyphens. Avoid spaces and Chinese characters in filenames.

## 2. Product videos

Upload MP4 videos to:

`public/videos/products/`

Recommended:

- MP4 / H.264
- 1080p or lower
- 10–30 seconds for a product demonstration
- Keep file size reasonable; do not upload large raw camera files

Example:

`public/videos/products/pv-crimping-tool.mp4`

## 3. Connect media to a product

Open:

`src/data/products.ts`

Each product has three media fields:

```ts
image: '/images/products/pv-crimping-tool.jpg',
gallery: [
  '/images/products/pv-crimping-tool.jpg',
  '/images/products/pv-crimping-tool-detail-01.jpg',
  '/images/products/pv-crimping-tool-use-01.jpg'
],
video: '/videos/products/pv-crimping-tool.mp4',
```

If there is no video yet, leave:

```ts
video: '',
```

## 4. Product description

The same file controls the text shown on the product page:

- `short` — short description used on product cards
- `description` — main product description
- `highlights` — key selling points
- `specs` — specification table

Example:

```ts
short: 'Short buyer-facing description.',
description: 'Full product description for the product detail page.',
highlights: [
  'Key feature 1',
  'Key feature 2',
  'Packaging / branding options'
],
specs: [
  ['Application', 'Solar PV installation'],
  ['Material', 'Confirm by product configuration'],
  ['Customization', 'Available']
]
```

Do not invent technical specifications. Confirm them with the factory first.

## 5. Adding a new product

Duplicate an existing product object in `src/data/products.ts`, then change:

1. `slug`
2. `name`
3. `category`
4. `eyebrow`
5. `sku`
6. `image`
7. `gallery`
8. `video`
9. descriptions / highlights / specs

The product detail page is generated automatically from the product data.

### Current categories

- `Cable Preparation`
- `Connector Tools`
- `Installation Kits`

If a new category is needed, add the category to `src/pages/products/index.astro` as well.

## 6. Publish changes

After uploading or editing files in GitHub:

1. Commit the changes to the production branch.
2. Cloudflare Pages will build and deploy automatically.
3. Open the live site and check the changed product page.

Do not delete the existing `src`, `public`, or product folders when adding media.
