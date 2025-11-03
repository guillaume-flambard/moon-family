# Moon Family - Three Independent Websites

Three independent websites for the Moon Family ecosystem in Haad Rin, Koh Phangan:
- **Mama Homemade** (mamahomemade-haadrin.com) - Authentic Thai restaurant
- **Moon Spoon** (moonspoon-haadrin.com) - Fusion restaurant & sunset cocktails
- **Moonland Bar** (moonlandbar-haadrin.com) - Beach bar, music & nightlife

## Quick Start

### From Root Directory

```bash
# Install dependencies (first time only)
npm install

# Run all three websites simultaneously
npm run dev

# Or run individually:
npm run dev:mama      # Mama Homemade only
npm run dev:spoon     # Moon Spoon only
npm run dev:bar       # Moonland Bar only
npm run dev:cms       # Payload CMS admin panel
```

### Individual Projects

```bash
# Mama Homemade
cd mama-homemade-haadrin
pnpm dev

# Moon Spoon
cd moon-spoon-haadrin
npm run dev

# Moonland Bar
cd moonland-haadrin
npm run dev
```

## Project Structure

```
moon-family/
├── mama-homemade-haadrin/    → mamahomemade-haadrin.com
├── moon-spoon-haadrin/        → moonspoon-haadrin.com
├── moonland-haadrin/          → moonlandbar-haadrin.com
├── cms/                       → Payload CMS server
├── nx.json                    → Nx workspace config
└── package.json               → Root scripts
```

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: TailwindCSS v4
- **i18n**: Inlang Paraglide (6 languages: EN, TH, FR, DE, RU, MY)
- **CMS**: Payload CMS (self-hosted)
- **Monorepo**: Nx
- **Package Managers**: pnpm (Mama Homemade), npm (others)

## Development

### Using Nx Commands

```bash
# Run specific project
nx dev mama-homemade-haadrin
nx dev moon-spoon-haadrin
nx dev moonland-haadrin

# Build specific project
nx build mama-homemade-haadrin
nx build moon-spoon-haadrin
nx build moonland-haadrin

# Run all in parallel
nx run-many --target=dev --all --parallel=3
```

### Using npm Scripts (Root)

```bash
npm run dev          # Run all three websites
npm run dev:mama     # Run Mama Homemade
npm run dev:spoon    # Run Moon Spoon
npm run dev:bar      # Run Moonland Bar
npm run dev:cms      # Run Payload CMS
```

## CMS Setup

See `cms/README.md` for Payload CMS setup instructions.

## Documentation

- `PROGRESS.md` - Implementation progress
- `NEXT_STEPS.md` - Next steps and setup instructions
- `IMPLEMENTATION_SUMMARY.md` - Complete summary
- `cms/README.md` - Payload CMS documentation
- `cms/INTEGRATION_EXAMPLE.md` - CMS integration examples

## Features

- ✅ Three independent websites with shared branding
- ✅ Multi-language support (6 languages)
- ✅ Payload CMS for content management
- ✅ Nx monorepo management
- ✅ Google Maps integration on all contact pages
- ✅ Responsive design
- ✅ SEO-ready structure

