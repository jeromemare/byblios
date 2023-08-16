# Specification de l'api d'accès aux données de la bibliothèque

## Fonctions à implémenter

```js
/**
 * Permet d'utiliser un proxy pour le développement
 */
bibtouApi.setBibHost("/bib");

/**
 * Renouvelle les documents pour l'utilisateur
 * @param {Array<Document>} documents Documents à renouveler
 * @param {User} user Utilisateur qui renouvelle les documents
 */
bibtouApi.renewDocumentsForUser(documents, user);

/**
 * Obtient pour un utilisateur les détails de son compte
 * - Nom, adresse, période de validité de l'abonnement, mail
 * - Emprunts
 * - Réservation
 * @param {Object} user
 */
bibtouApi.getAccountDetails(user);

bibtouApi.search(term, limit);
bibtouApi.prepare(term);
bibtouApi.prepareAdvanced(query);
bibtouApi.getResults(searchSession, options);
```

## Objets d'interface

User
Document
Copie
