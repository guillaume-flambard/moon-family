# Moon Family CMS - Payload CMS

## Overview

Payload CMS is a self-hosted, headless CMS built with TypeScript. This CMS manages content for all three Moon Family websites:
- Mama Homemade (mamahomemade-haadrin.com)
- Moon Spoon (moonspoon-haadrin.com)
- Moonland Bar (moonlandbar-haadrin.com)

## Quick Start

### 1. Install Dependencies

```bash
cd /Users/memo/projects/moon-family/cms
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` and set:
- `PAYLOAD_SECRET` - A random secret key (generate with `openssl rand -base64 32`)
- `MONGODB_URI` - Your MongoDB connection string

### 3. Set Up MongoDB

**Option A: Local MongoDB**
```bash
# Install MongoDB locally, then:
MONGODB_URI=mongodb://localhost:27017/moon-family-cms
```

**Option B: MongoDB Atlas (Cloud)**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Set in `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/moon-family-cms
```

### 4. Run Payload CMS

```bash
npm run dev
```

Admin panel will be available at: http://localhost:3001/admin

### 5. Create First Admin User

On first run, you'll be prompted to create an admin user. Use this to access the admin panel.

## Collections

### Menu Items
- Manages menu items for Mama Homemade and Moon Spoon
- Supports multi-language translations (EN, TH, FR, DE, RU, MY)
- Fields: name, description, price, category, spicy, vegetarian, image, venue, order

### Events
- Manages events for Moonland Bar
- Supports multi-language translations
- Fields: title, description, eventDate, endDate, eventType, image, featured, ticketLink

### Gallery Images
- Manages gallery images for all venues
- Fields: title, image, category, description, venue, order

### Media
- Handles file uploads (images, etc.)
- Automatically optimized by Payload

## Integration with Websites

### Install Payload Client

In each website directory:

```bash
cd mama-homemade-haadrin  # (or moon-spoon-haadrin, moonland-haadrin)
npm install payload
```

### Example: Fetch Menu Items

```typescript
// src/lib/payload/client.ts
import { getPayload } from 'payload';
import config from '../../../../cms/src/payload.config';

export const payloadClient = await getPayload({ config });

// Usage in page
import { payloadClient } from '$lib/payload/client';

const menuItems = await payloadClient.find({
  collection: 'menu-items',
  where: {
    venue: {
      equals: 'mama-homemade',
    },
  },
  sort: 'order',
});
```

### Or Use REST API

```typescript
// src/lib/api/menu.ts
const API_URL = process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001';

export async function getMenuItems(venue: string) {
  const response = await fetch(`${API_URL}/api/menu-items?where[venue][equals]=${venue}&sort=order`);
  return response.json();
}
```

## Environment Variables for Websites

Add to each website's `.env`:

```
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
# Or production URL:
# PAYLOAD_PUBLIC_SERVER_URL=https://cms.moonfamily.com
```

## Production Deployment

### 1. Build Payload CMS

```bash
npm run build
```

### 2. Deploy

Deploy to:
- Vercel
- Railway
- Render
- DigitalOcean
- Your own server

### 3. Set Production Environment Variables

- `PAYLOAD_SECRET` - Strong secret key
- `MONGODB_URI` - Production MongoDB connection
- `PAYLOAD_PUBLIC_SERVER_URL` - Your production CMS URL
- `NODE_ENV=production`

## Features

- ✅ Self-hosted (full control)
- ✅ TypeScript (type-safe)
- ✅ REST API out of the box
- ✅ GraphQL support (optional)
- ✅ File uploads with optimization
- ✅ Multi-language support
- ✅ Customizable admin panel
- ✅ Access control & permissions

## Documentation

- [Payload CMS Docs](https://payloadcms.com/docs)
- [Payload API Reference](https://payloadcms.com/docs/api/overview)
