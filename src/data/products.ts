/*
  NODIX PRODUCT TEMPLATE — SELF-MANAGED
  =====================================

  PRODUCT STRUCTURE
  1. Top-level category  → e.g. Connector Tools
  2. Subcategory         → e.g. PV Crimping Tools
  3. Product / SKU       → e.g. Professional PV Crimping Tool

  Upload media:
  - Images: public/images/products/
  - Videos: public/videos/products/

  Add a new product by duplicating one product block and changing:
  slug, name, category, subcategory, sku, media, description, highlights and specs.

  IMPORTANT:
  - `category` controls the main product family.
  - `subcategory` creates the next level in the catalogue.
  - Different colors / sizes that are the SAME tool should normally stay as
    variants of one product, not separate product pages.
  - Make a separate product block when the tool itself, application or
    specification is materially different.
*/

export const categories = [
  {
    slug: 'cable-preparation',
    name: 'Cable Preparation',
    number: '01',
    description: 'Cutting and stripping tools for PV cable preparation.',
    subcategories: [
      { slug: 'pv-cable-cutters', name: 'PV Cable Cutters', description: 'Manual cutting tools for photovoltaic cable preparation.' },
      { slug: 'pv-cable-strippers', name: 'PV Cable Strippers', description: 'Stripping tools for clean and repeatable PV cable preparation.' }
    ]
  },
  {
    slug: 'connector-tools',
    name: 'Connector Tools',
    number: '02',
    description: 'Crimping, assembly and disconnect tools for PV connector work.',
    subcategories: [
      { slug: 'pv-crimping-tools', name: 'PV Crimping Tools', description: 'Hand crimping tools for PV terminal and connector assembly.' },
      { slug: 'pv-connector-tools', name: 'PV Connector Tools', description: 'Assembly, tightening and disconnect tools for PV connector systems.' }
    ]
  },
  {
    slug: 'installation-kits',
    name: 'Installation Kits',
    number: '03',
    description: 'Configurable tool combinations for PV installation and field service.',
    subcategories: [
      { slug: 'pv-installer-tool-kits', name: 'PV Installer Tool Kits', description: 'Tool combinations for installers, distributors and service teams.' }
    ]
  },
  {
    slug: 'maintenance-tools',
    name: 'Maintenance Tools',
    number: '04',
    description: 'Tools for PV inspection, maintenance and field service. More products can be added here.',
    subcategories: []
  }
];

export const products = [
  {
    slug: 'pv-crimping-tool',
    name: 'PV Crimping Tool',
    category: 'Connector Tools',
    subcategory: 'PV Crimping Tools',
    eyebrow: '01 / PV CRIMPING TOOLS',
    sku: 'NDX-PV-01',
    image: '/images/products/pv-crimping-tool.jpg',
    gallery: ['/images/products/pv-crimping-tool.jpg'],
    video: '',
    short: 'Ratchet crimping tool for professional photovoltaic cable and connector assembly.',
    description: 'A practical hand tool for repeatable PV terminal crimping in solar installation and field service work.',
    highlights: ['Manual ratchet operation', 'PV terminal crimping', 'Packaging / branding options'],
    variants: [
      // { name: 'Standard', sku: 'NDX-PV-01A', image: '/images/products/pv-crimping-tool-standard.jpg' },
      // { name: 'Professional', sku: 'NDX-PV-01B', image: '/images/products/pv-crimping-tool-professional.jpg' }
    ],
    specs: [
      ['Application', 'Solar PV installation'],
      ['Operation', 'Manual ratchet'],
      ['Cable compatibility', 'Confirm by product configuration'],
      ['Tool type', 'PV terminal crimper'],
      ['Customization', 'Packaging / branding available']
    ]
  },
  {
    slug: 'pv-cable-stripper',
    name: 'PV Cable Stripper',
    category: 'Cable Preparation',
    subcategory: 'PV Cable Strippers',
    eyebrow: '02 / PV CABLE STRIPPERS',
    sku: 'NDX-PV-02',
    image: '/images/products/pv-cable-stripper.jpg',
    gallery: ['/images/products/pv-cable-stripper.jpg'],
    video: '',
    short: 'Precision stripping tool designed for common photovoltaic cable sizes.',
    description: 'Designed to help installers prepare PV cable cleanly and consistently before connector assembly.',
    highlights: ['Manual cable preparation', 'Designed for PV cable work', 'Packaging / branding options'],
    variants: [],
    specs: [
      ['Application', 'Solar PV installation'],
      ['Operation', 'Manual'],
      ['Cable type', 'Photovoltaic cable'],
      ['Cable compatibility', 'Confirm by product configuration'],
      ['Customization', 'Packaging / branding available']
    ]
  },
  {
    slug: 'pv-cable-cutter',
    name: 'PV Cable Cutter',
    category: 'Cable Preparation',
    subcategory: 'PV Cable Cutters',
    eyebrow: '03 / PV CABLE CUTTERS',
    sku: 'NDX-PV-03',
    image: '/images/products/pv-cable-cutter.jpg',
    gallery: ['/images/products/pv-cable-cutter.jpg'],
    video: '',
    short: 'Clean-cutting hand tool for photovoltaic cable preparation and field installation.',
    description: 'A compact cutting tool for clean cable preparation at installation sites, workshops and service locations.',
    highlights: ['Clean cable cutting', 'Manual field operation', 'Packaging / branding options'],
    variants: [],
    specs: [
      ['Application', 'PV cable preparation'],
      ['Operation', 'Manual'],
      ['Tool type', 'Cable cutter'],
      ['Use', 'Installation / maintenance'],
      ['Customization', 'Packaging / branding available']
    ]
  },
  {
    slug: 'pv-connector-tools',
    name: 'PV Connector Tools',
    category: 'Connector Tools',
    subcategory: 'PV Connector Tools',
    eyebrow: '04 / PV CONNECTOR TOOLS',
    sku: 'NDX-PV-04',
    image: '/images/products/pv-connector-tools.jpg',
    gallery: ['/images/products/pv-connector-tools.jpg'],
    video: '',
    short: 'Assembly and disconnect tools for PV connector systems used in field installation.',
    description: 'Practical connector-handling tools for assembly, tightening and disconnection during PV installation and service work.',
    highlights: ['Assembly and tightening', 'Connector disconnection', 'Packaging / branding options'],
    variants: [],
    specs: [
      ['Application', 'PV connector assembly'],
      ['Operation', 'Manual'],
      ['Tool type', 'Assembly / disconnect tools'],
      ['Use', 'Installation / maintenance'],
      ['Customization', 'Packaging / branding available']
    ]
  },
  {
    slug: 'pv-installer-tool-kit',
    name: 'PV Installer Tool Kit',
    category: 'Installation Kits',
    subcategory: 'PV Installer Tool Kits',
    eyebrow: '05 / PV INSTALLER TOOL KITS',
    sku: 'NDX-PV-05',
    image: '/images/products/pv-installer-tool-kit.jpg',
    gallery: ['/images/products/pv-installer-tool-kit.jpg'],
    video: '',
    short: 'A practical selection of essential hand tools for solar PV installation work.',
    description: 'A configurable tool combination for distributors, installers and service teams that need a compact PV field kit.',
    highlights: ['Configurable tool combination', 'Compact field kit format', 'Custom packaging options'],
    variants: [
      // { name: 'Basic Kit', sku: 'NDX-PV-05A', image: '/images/products/pv-installer-tool-kit-basic.jpg' },
      // { name: 'Professional Kit', sku: 'NDX-PV-05B', image: '/images/products/pv-installer-tool-kit-pro.jpg' }
    ],
    specs: [
      ['Application', 'Solar PV installation'],
      ['Configuration', 'Customizable'],
      ['Typical contents', 'Cutting / stripping / crimping / connector tools'],
      ['Packaging', 'Box / pouch / custom packaging'],
      ['MOQ', 'Discuss by configuration']
    ]
  }
];

export const getCategory = (slug) => categories.find((category) => category.slug === slug);
export const getSubcategory = (categorySlug, subcategorySlug) => {
  const category = getCategory(categorySlug);
  return category?.subcategories.find((subcategory) => subcategory.slug === subcategorySlug);
};
export const getProductsByCategory = (categoryName) => products.filter((product) => product.category === categoryName);
export const getProductsBySubcategory = (subcategoryName) => products.filter((product) => product.subcategory === subcategoryName);
