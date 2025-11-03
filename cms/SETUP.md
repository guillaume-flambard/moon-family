# Payload CMS Setup Instructions

## ⚠️ TypeScript Errors (Expected)

Les erreurs TypeScript dans `server.ts` et `payload.config.ts` sont **normales** jusqu'à l'installation des dépendances.

## Installation

### 1. Installer les dépendances

```bash
cd /Users/memo/projects/moon-family/cms
npm install
```

Cela installera :
- `payload` - Le CMS principal
- `express` - Serveur web
- `mongoose` - Connexion MongoDB
- `dotenv` - Variables d'environnement
- `@payloadcms/db-mongodb` - Adapter MongoDB
- `@payloadcms/richtext-slate` - Éditeur riche
- `@types/node` - Types TypeScript pour Node.js
- `@types/express` - Types TypeScript pour Express

### 2. Configurer l'environnement

```bash
cp .env.example .env
```

Puis éditer `.env` :
- Générer un secret : `openssl rand -base64 32`
- Configurer `MONGODB_URI` (local ou MongoDB Atlas)

### 3. Démarrer Payload CMS

```bash
npm run dev
```

### 4. Accéder au panel admin

Après le démarrage, accéder à : http://localhost:3001/admin

Vous serez invité à créer le premier utilisateur admin.

## Résolution des erreurs TypeScript

Après `npm install`, les erreurs TypeScript disparaîtront automatiquement. Les types seront disponibles grâce à :
- `@types/node` pour `process.env`
- `@types/express` pour Express
- Types Payload inclus dans le package `payload`

## Structure du projet

```
cms/
├── src/
│   ├── payload.config.ts  # Configuration Payload avec collections
│   ├── server.ts          # Serveur Express
│   └── collections/
│       └── Users.ts       # Collection utilisateurs
├── package.json           # Dépendances
├── tsconfig.json         # Configuration TypeScript
├── nodemon.json         # Configuration nodemon
└── .env.example         # Exemple de variables d'environnement
```

## Collections disponibles

1. **Menu Items** - Items de menu pour Mama Homemade & Moon Spoon
2. **Events** - Événements pour Moonland Bar
3. **Gallery Images** - Images pour toutes les galeries
4. **Media** - Upload de fichiers
5. **Users** - Authentification admin

