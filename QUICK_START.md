# Quick Start Guide

## Commands depuis la racine

```bash
# Installer les dépendances (première fois)
npm install

# Lancer tous les sites en parallèle
npm run dev

# Lancer un site spécifique
npm run dev:mama     # Mama Homemade (http://localhost:5173)
npm run dev:spoon    # Moon Spoon (http://localhost:5174)
npm run dev:bar      # Moonland Bar (http://localhost:5175)
npm run dev:cms      # Payload CMS (http://localhost:3001/admin)
```

## Commands avec Nx

```bash
# Lancer tous les projets
nx run-many --target=dev --all --parallel=3

# Lancer un projet spécifique
nx dev mama-homemade-haadrin
nx dev moon-spoon-haadrin
nx dev moonland-haadrin

# Build tous les projets
nx run-many --target=build --all
```

## Setup initial

### 1. Installer les dépendances

```bash
# À la racine
npm install

# Dans chaque projet
cd mama-homemade-haadrin && pnpm install
cd ../moon-spoon-haadrin && npm install
cd ../moonland-haadrin && npm install
cd ../cms && npm install
```

### 2. Configurer Payload CMS (optionnel)

```bash
cd cms
cp .env.example .env
# Éditer .env avec PAYLOAD_SECRET et MONGODB_URI
npm run dev
```

### 3. Lancer les sites

```bash
# Depuis la racine
npm run dev
```

Les sites seront disponibles sur:
- Mama Homemade: http://localhost:5173
- Moon Spoon: http://localhost:5174  
- Moonland Bar: http://localhost:5175
- Payload CMS: http://localhost:3001/admin

