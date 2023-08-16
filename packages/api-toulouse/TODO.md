# Reste à faire

## Fix

### Erreur dans le parser

12768873 - La dernière rose de l'été

## Features

### Recherche de documents

- Etre capable de réaliser des recherches
  - Une méthode permet de lancer une recherche
  - cette dernière peut être directe : string
  - ou complexe : objet => par exemple pour une recherche par auteur

- La recherche renvoit des objets `references`
  - ces derniers définissent un document, la clef est l'EAN ou isbn
  - ils doivent contenir une liste de `documents` qui correspondent aux instances de cette référence disponibles en bibliothèque

#### Plan d'action

1. Mettre en place l'enregistreur de requête pour les dévs déconnectés
2. Etre capable de requeter une chaine : isbn
3. Parser la page de résultats
4. Définir l'objet référence et le peupler suite à une requête
5. Gérer le cas où plusieurs références sont trouvées
6. Gérer le cas où une seule référence est trouvée
7. Gérer les cas d'erreur

## Technical Debt
