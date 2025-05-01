# JSONForms Read-Only Challenge

Cette application est une démonstration du challenge proposé par **Cyberun**. Il s'agit d'une application React en **TypeScript** utilisant la librairie **jsonforms** avec uniquement les **vanilla-renderers**, et des renderers personnalisés en **lecture seule**.

## 🚀 Démonstration en ligne

Lien de production (via Vercel) : **[https://jsonforms-challenge-nayquoii.vercel.app](https://jsonforms-challenge-nayquoii.vercel.app)**

> Remplacez l’URL ci-dessus par celle générée dans votre propre déploiement.

## 📂 Structure du projet

```bash
jsonforms-challenge/
├── public/
├── src/
│   ├── components/                # Custom renderers React
│   │   ├── ReadOnlyStringRenderer.tsx
│   │   ├── ReadOnlyMultilineRenderer.tsx
│   │   ├── ReadOnlyEnumRenderer.tsx
│   │   └── ReadOnlyCountryPercentRenderer.tsx
│   ├── renderers/                 # Testers pour chaque custom renderer
│   │   ├── ReadOnlyStringRenderer.tester.ts
│   │   ├── ReadOnlyMultilineRenderer.tester.ts
│   │   ├── ReadOnlyEnumRenderer.tester.ts
│   │   └── ReadOnlyCountryPercentRenderer.tester.ts
│   ├── schema/                    # Schéma JSON et UI schema
│   │   ├── schema.ts
│   │   └── uiSchema.ts
│   ├── styles/                    # Fichier CSS global pour les rendus
│   │   └── ReadOnlyStyles.css
│   ├── data.ts                    # Données d'exemple utilisées pour le rendu
│   ├── App.tsx                    # Point d’entrée de l’application
│   ├── index.tsx                  # Montage React
│   └── ...                        # autres fichiers (tests, config)
├── .gitignore
├── package.json
└── README.md                      # Ce fichier
```

## 🔧 Installation & exécution locale

1. **Cloner le dépôt**

   ```bash
   git clone git@github.com:NayquoII/jsonforms-challenge.git
   cd jsonforms-challenge
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   npm start
   ```

   L’application sera disponible sur `http://localhost:3000`.

4. **Créer une build de production**

   ```bash
   npm run build
   ```

## 📦 Déploiement

Ce projet peut être déployé sur n’importe quel hébergement statique. Il est configuré pour Vercel :

1. Pousser votre repo sur GitHub
2. Créer un nouveau projet sur [Vercel](https://vercel.com) et importer ce repository
3. Vercel détecte automatiquement Create React App (build : `npm run build`, dossier de sortie : `build`)

## 🎯 Objectif du challenge

- Créer des **custom renderers** pour afficher les données en **lecture seule**
- Utiliser exclusivement les **vanilla-renderers** de `@jsonforms/vanilla-renderers`
- Affichage :
  - Champs texte monoligne & enum : deux colonnes (question / réponse), avec badges arrondis pour les enums
  - Champs texte multiligne : bloc full-width sous le label
  - Tableau pays / pourcentage : présentation tabulaire lisible

## 🤝 Accès au code source

- **Repository GitHub** : [https://github.com/NayquoII/jsonforms-challenge](https://github.com/NayquoII/jsonforms-challenge)

---

*Developed by Gregory Naji – Mai 2025*

