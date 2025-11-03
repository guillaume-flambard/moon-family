# Payload CMS Integration Examples for SvelteKit

## Using REST API (Recommended for SvelteKit)

### Fetch Menu Items

```typescript
// src/lib/api/menu.ts
const API_URL = import.meta.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001';

export interface MenuItem {
  id: string;
  name: string;
  nameTranslations?: {
    en?: string;
    th?: string;
    fr?: string;
    de?: string;
    ru?: string;
    my?: string;
  };
  description?: string;
  descriptionTranslations?: {
    en?: string;
    th?: string;
    fr?: string;
    de?: string;
    ru?: string;
    my?: string;
  };
  price: number;
  price2?: number;
  category: string;
  spicy?: boolean;
  vegetarian?: boolean;
  image?: any;
  venue: string;
  order?: number;
}

export async function getMenuItems(venue: string): Promise<MenuItem[]> {
  const response = await fetch(
    `${API_URL}/api/menu-items?where[venue][equals]=${venue}&sort=order`
  );
  const data = await response.json();
  return data.docs || [];
}
```

### Usage in SvelteKit Page

```svelte
<script lang="ts">
  import { getMenuItems } from '$lib/api/menu';
  import { page } from '$app/stores';
  
  let menuItems = $state<MenuItem[]>([]);
  
  $effect(() => {
    getMenuItems('mama-homemade').then(items => {
      menuItems = items;
    });
  });
</script>

{#each menuItems as item}
  <div>
    <h3>{item.name}</h3>
    <p>{item.description}</p>
    <p>฿{item.price}</p>
  </div>
{/each}
```

### Fetch Events

```typescript
// src/lib/api/events.ts
const API_URL = import.meta.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001';

export interface Event {
  id: string;
  title: string;
  titleTranslations?: Record<string, string>;
  description?: string;
  descriptionTranslations?: Record<string, string>;
  eventDate: string;
  endDate?: string;
  eventType: string;
  image?: any;
  featured?: boolean;
  ticketLink?: string;
}

export async function getEvents(limit?: number): Promise<Event[]> {
  const url = `${API_URL}/api/events?sort=-eventDate${limit ? `&limit=${limit}` : ''}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.docs || [];
}

export async function getFeaturedEvents(): Promise<Event[]> {
  const response = await fetch(
    `${API_URL}/api/events?where[featured][equals]=true&sort=-eventDate`
  );
  const data = await response.json();
  return data.docs || [];
}
```

### Fetch Gallery Images

```typescript
// src/lib/api/gallery.ts
const API_URL = import.meta.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001';

export interface GalleryImage {
  id: string;
  title: string;
  image: any;
  category: string;
  description?: string;
  venue: string;
  order?: number;
}

export async function getGalleryImages(venue: string, category?: string): Promise<GalleryImage[]> {
  let url = `${API_URL}/api/gallery-images?where[venue][equals]=${venue}&sort=order`;
  if (category) {
    url += `&where[category][equals]=${category}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data.docs || [];
}
```

## Server-Side Fetching (Recommended for SEO)

```typescript
// src/routes/menu/+page.server.ts
import { getMenuItems } from '$lib/api/menu';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const menuItems = await getMenuItems('mama-homemade');
  return {
    menuItems
  };
};
```

```svelte
<!-- src/routes/menu/+page.svelte -->
<script lang="ts">
  import type { PageData } from './$types';
  
  let { data }: { data: PageData } = $props();
</script>

{#each data.menuItems as item}
  <!-- Render menu item -->
{/each}
```

## Environment Variables

Add to each website's `.env`:

```
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
```

For production:
```
PAYLOAD_PUBLIC_SERVER_URL=https://cms.moonfamily.com
```

## Image URLs

When fetching images from Payload, use the image URL format:

```typescript
function getImageUrl(image: any): string {
  if (!image) return '';
  const API_URL = import.meta.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001';
  if (typeof image === 'string') {
    return `${API_URL}/media/${image}`;
  }
  return `${API_URL}${image.url}`;
}
```

