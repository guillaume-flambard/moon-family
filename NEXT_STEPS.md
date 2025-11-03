# Next Steps to Complete Implementation

## Immediate Actions Required

### 1. Install Dependencies

Run these commands in each project directory:

```bash
# Mama Homemade
cd mama-homemade-haadrin
pnpm install

# Moon Spoon
cd moon-spoon-haadrin
npm install

# Moonland Bar
cd moonland-haadrin
npm install
```

### 2. Generate Inlang Paraglide Translations

For each website, run:

```bash
# In each project directory
npx @inlang/paraglide-js compile --project ./project.inlang --outdir ./src/lib/paraglide
```

Or it should auto-generate when running the dev server.

### 3. Set Up Payload CMS (Self-Hosted)

**Install Dependencies:**

```bash
cd /Users/memo/projects/moon-family/cms
npm install

# Copy environment file
cp .env.example .env

# Generate secret key
openssl rand -base64 32

# Edit .env and set:
# - PAYLOAD_SECRET=<generated-secret-key>
# - MONGODB_URI=mongodb://localhost:27017/moon-family-cms (or MongoDB Atlas)
```

**Set up MongoDB:**

Option A - Local MongoDB:
- Install MongoDB locally
- Use: `MONGODB_URI=mongodb://localhost:27017/moon-family-cms`

Option B - MongoDB Atlas (Cloud):
- Create account at https://www.mongodb.com/cloud/atlas
- Create cluster and get connection string
- Use: `MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/moon-family-cms`

**Start Payload CMS:**
```bash
npm run dev
```

Access admin panel at: http://localhost:3001/admin

### 4. Add Environment Variables to Websites

Create `.env` files in each website:

**mama-homemade-haadrin/.env**
```
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
```

**moon-spoon-haadrin/.env**
```
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
```

**moonland-haadrin/.env**
```
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
```

For production, update to your production CMS URL.

### 5. Install Payload Client (Optional)

If using Payload client directly (instead of REST API):

```bash
# In each website directory
cd mama-homemade-haadrin
npm install payload

cd ../moon-spoon-haadrin
npm install payload

cd ../moonland-haadrin
npm install payload
```

Note: You can also use the REST API directly with fetch() without installing payload package.

## Optional Enhancements

### 6. Complete Translations

Add translations for Moon Spoon and Moonland Bar in all 6 languages:
- English (✅ done)
- Thai
- French
- German
- Russian
- Myanmar

Copy structure from `mama-homemade-haadrin/messages/` as templates.

### 7. Add Real Content

- Update menu items with actual dishes and prices
- Add real event listings
- Upload actual gallery images
- Update contact information with real phone numbers

### 8. SEO & Metadata

- Add structured data (JSON-LD) for local businesses
- Update meta descriptions
- Create sitemaps for each domain
- Set up Google Analytics

### 9. Cross-Linking

Add subtle links between the three websites in footers:
- "Also visit Mama Homemade" in Moon Spoon footer
- "Also visit Moon Spoon" in Moonland Bar footer
- etc.

### 10. Testing

- Test all pages on all three sites
- Verify translations work
- Test responsive design
- Verify Google Maps embeds work
- Test CMS integration

## Deployment

### Domains
- mamahomemade-haadrin.com
- moonspoon-haadrin.com
- moonlandbar-haadrin.com

### Hosting
- Recommended: Vercel or Cloudflare Pages
- Each site can be deployed independently
- Or use Nx to manage deployments centrally

## Running the Sites

```bash
# From root directory using Nx
nx dev mama-homemade-haadrin
nx dev moon-spoon-haadrin
nx dev moonland-haadrin

# Or from individual directories
cd mama-homemade-haadrin && pnpm dev
cd moon-spoon-haadrin && npm run dev
cd moonland-haadrin && npm run dev
```

