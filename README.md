# Nodix Solar PV Installation Tools

Production-ready static B2B site for Nodix, focused on solar PV installation tools.

## Stack

- Astro 7
- Static output
- Cloudflare Pages
- nodixglobal.com

## Local development

Requirements: Node.js 22.12+

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Build output: `dist`

## Cloudflare Pages launch settings

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Node.js: 22.x

After the first successful deployment, connect the custom domain `nodixglobal.com` in Cloudflare Pages and verify both the apex domain and `www` behavior in the dashboard.

## Current production-ready items

- Responsive desktop/mobile layout
- Real product photography for all 5 initial products
- Product detail pages with product JSON-LD
- Organization JSON-LD
- Canonical, Open Graph and Twitter metadata
- Static XML sitemap and robots.txt
- 404 page
- Cloudflare Pages `_headers` security headers
- Web app manifest and favicon
- Mobile persistent RFQ CTA
- Product-specific RFQ preselection via `?product=`
- RFQ form currently prepares a prefilled email to `sales@nodixglobal.com`

## Before public launch

1. Confirm the five product specifications with the factory.
2. Replace any draft/placeholder specification text with verified values and applicable documents.
3. Connect `nodixglobal.com` in Cloudflare Pages.
4. Submit `https://nodixglobal.com/sitemap.xml` to Google Search Console after DNS/domain setup.
5. Test the RFQ flow on desktop and mobile with a real email client.
6. Add analytics only if needed; no analytics script is included by default.

## Future upgrade

The RFQ UI is intentionally independent of the delivery method. If a transactional form endpoint is added later, the same UI can be connected to a Cloudflare Pages Function or an approved form provider without redesigning the site.

## Self-managed product media (V2.3)

You can upload and maintain product images and videos yourself.

- Images: `public/images/products/`
- Videos: `public/videos/products/`
- Product data: `src/data/products.ts`
- Full instructions: `PRODUCT_UPLOAD_GUIDE.md`

Upload media first, then add its path to the relevant product's `gallery` or `video` field. The product detail page automatically renders the gallery and optional MP4 video.

## Product catalogue hierarchy (V2.4)
Products are organized as `category → subcategory → product`. Add new tool types under `categories` in `src/data/products.ts`; the navigation and catalogue pages will update automatically.
