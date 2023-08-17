import chalk from 'chalk'
import _ from 'lodash'

/**
 * Affiche les documents issus de la recherche
 * @param {Object} document
 * @param {Object} document._search Paramètre de la recherche permettant d'obtenir ce document
 * @param {String} document.id Identifiant unique du document
 * @param {String} document.title Titre du document
 * @param {String} document.author Auteur du document
 * @param {String} document.year Année de sortie
 * @param {String} document.summary Résumé du contenu
 * @param {String} document.isbn Identifiant ISBN du livre
 * @param {String} document.price Prix du livre
 * @param {String} document.editor Information sur l'édition
 * @param {String} document.materialDescription Description matérielle du document
 * @param {Array<Object>} document.copies Liste des exemplaires
 */
function printDocument(document) {
  const { author, title, isbn, id, image, copies = [] } = document
  // eslint-disable-next-line no-underscore-dangle
  const item = document._search && document._search.item ? document._search.item : 1
  const nbCopies = copies.length
  const copiesAvailable = copies.filter(
    copy => copy.availableOn === '' && copy.localisation !== 'Réservé',
  )
  const copiesUnavailable = copies.filter(
    copy => !(copy.availableOn === '' && copy.localisation !== 'Réservé'),
  )
  const nbCopiesAvailable = copiesAvailable.length
  const isAvailable = !!copiesAvailable.length
  const localisations = copiesAvailable
    .map(copy => `${copy.library}[${copy.localisation}]`)
    .join(', ')
  const localisationsUnavailable = copiesUnavailable.map(copy => copy.library).join(', ')
  const index = `${item}`.padStart(3, ' ')
  // eslint-disable-next-line no-console
  console.log(
    // @ts-ignore
    chalk`{green ${index}} {blue [${author}]} {${
      isAvailable ? 'green' : 'red'
    } ${title}} {gray <${isbn}/${id}>}`,
  )
  if (isAvailable) {
    // eslint-disable-next-line no-console
    console.log(chalk`     [{green ${nbCopiesAvailable}}/${nbCopies}] {green ${localisations}}`)
    // eslint-disable-next-line no-console
    console.log(chalk`     {gray ${localisationsUnavailable}}`)
  } else {
    // eslint-disable-next-line no-console
    console.log(chalk`     [${nbCopiesAvailable}/${nbCopies}]{gray ${localisationsUnavailable}}`)
  }
  // eslint-disable-next-line no-console
  console.log(`     ${image}`)
  // copies.forEach(copy => console.log(JSON.stringify(copy)))
}

export function printDocuments(documents) {
  const documentList = _.castArray(documents)
  documentList.forEach(document => printDocument(document))
}
