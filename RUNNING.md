# Comment lancer les projets Moon Family

## ✅ Installation terminée

Toutes les dépendances sont maintenant installées :
- ✅ Nx installé à la racine
- ✅ Dépendances CMS installées
- ✅ Configuration Nx mise à jour

## 🚀 Lancer les projets

### Option 1 : Tous les sites en parallèle (via Nx)

```bash
npm run dev
```

Cela lancera les 3 sites en parallèle :
- Mama Homemade
- Moon Spoon  
- Moonland Bar

### Option 2 : Sites individuels

```bash
# Mama Homemade
npm run dev:mama
# ou directement :
cd mama-homemade-haadrin && pnpm dev

# Moon Spoon
npm run dev:spoon
# ou directement :
cd moon-spoon-haadrin && npm run dev

# Moonland Bar
npm run dev:bar
# ou directement :
cd moonland-haadrin && npm run dev
```

### Option 3 : Payload CMS

```bash
npm run dev:cms
# ou directement :
cd cms && npm run dev
```

## 📍 URLs des sites

Une fois lancés, les sites seront disponibles sur :
- **Mama Homemade** : http://localhost:5173 (ou autre port si 5173 est occupé)
- **Moon Spoon** : http://localhost:5174 (ou autre port)
- **Moonland Bar** : http://localhost:5175 (ou autre port)
- **Payload CMS Admin** : http://localhost:3001/admin

## ⚠️ Note importante

Si vous lancez `npm run dev` à la racine, Nx lancera tous les projets en parallèle. Pour arrêter tous les serveurs, appuyez sur `Ctrl+C` dans le terminal.

## 🛠️ Problèmes courants

### Port déjà utilisé

Si un port est déjà utilisé, Vite choisira automatiquement le port suivant disponible. Vérifiez les logs dans le terminal pour voir les ports réels.

### Nx ne trouve pas les projets

Assurez-vous que les fichiers `project.json` existent dans chaque dossier de projet :
- `mama-homemade-haadrin/project.json`
- `moon-spoon-haadrin/project.json`
- `moonland-haadrin/project.json`

## 📝 Prochaines étapes

1. **Configurer Payload CMS** :
   ```bash
   cd cms
   cp .env.example .env
   # Éditer .env avec PAYLOAD_SECRET et MONGODB_URI
   npm run dev
   ```

2. **Créer le premier utilisateur admin** dans Payload CMS (http://localhost:3001/admin)

3. **Développer votre contenu** via le panel admin Payload CMS

