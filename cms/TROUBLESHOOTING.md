# Troubleshooting Payload CMS

## ✅ Dépendances Installées

Toutes les dépendances sont maintenant installées :
- ✅ `express` - Serveur web
- ✅ `payload` - CMS principal
- ✅ `dotenv` - Variables d'environnement
- ✅ `mongoose` - MongoDB
- ✅ `@types/node` - Types TypeScript pour Node.js
- ✅ `@types/express` - Types TypeScript pour Express
- ✅ `typescript` - Compilateur TypeScript

## 🔄 Résolution des Erreurs TypeScript

Si vous voyez encore des erreurs TypeScript dans votre éditeur :

### Solution 1 : Redémarrer le serveur TypeScript

Dans VS Code/Cursor :
1. Ouvrir la palette de commandes (`Cmd+Shift+P` sur Mac, `Ctrl+Shift+P` sur Windows/Linux)
2. Taper : `TypeScript: Restart TS Server`
3. Appuyer sur Entrée

### Solution 2 : Redémarrer l'éditeur

Parfois il faut simplement redémarrer VS Code/Cursor pour que les types soient reconnus.

### Solution 3 : Vérifier la configuration

Le `tsconfig.json` est configuré avec :
```json
{
  "compilerOptions": {
    "types": ["node"],
    "moduleResolution": "node"
  }
}
```

Assurez-vous que votre éditeur utilise bien ce `tsconfig.json`.

## ⚠️ Erreur Sharp (Non-Bloquante)

L'erreur avec `sharp` lors de l'installation est normale sur certains systèmes macOS. Sharp est utilisé pour le traitement d'images mais n'est pas strictement nécessaire pour démarrer le CMS.

**Solution :** Sharp a été installé avec `--ignore-scripts` et fonctionne généralement sans problème. Si vous avez besoin du traitement d'images avancé plus tard, vous pouvez réinstaller sharp séparément.

## 🚀 Démarrer le CMS

Maintenant que les dépendances sont installées, vous pouvez :

1. **Créer le fichier `.env`** :
   ```bash
   cp .env.example .env
   ```

2. **Configurer les variables d'environnement** dans `.env` :
   - `PAYLOAD_SECRET` - Générer avec `openssl rand -base64 32`
   - `MONGODB_URI` - Connexion MongoDB (local ou Atlas)

3. **Démarrer le serveur** :
   ```bash
   npm run dev
   ```

4. **Accéder au panel admin** : http://localhost:3001/admin

## 📝 Note sur les Erreurs TypeScript

Si les erreurs TypeScript persistent après avoir redémarré le serveur TypeScript, c'est généralement parce que :
- L'éditeur n'a pas encore rechargé les types
- Le cache TypeScript doit être nettoyé

Dans ce cas, patientez quelques secondes ou redémarrez complètement l'éditeur.

