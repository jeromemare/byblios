import _ from 'lodash'

import parse from './document-webpage-parser'

/**
 * Représente un document
 * Ce dernier référence plusieurs exemplaires (copy)
 *
 */
class Document {
  /**
   * Liste des exemplaires du document
   */
  constructor(data) {
    _.assign(this, data)
  }

  /**
   * Permet de créer un document à partir d'une page web
   * @param {String} webPage page web décrivant le document
   */
  static createFromWebPage(webPage) {
    const webPageParser = parse(webPage)

    const dataToParse = {
      id: true,
      image: true,
      title: true,
      type: true,
      author: true,
      year: true,
      summary: true,
      isbn: true,
      price: true,
      editor: true,
      materialDescription: true,
      copies: true,
    }

    const data = _.mapValues(dataToParse, (value, key) => webPageParser(key))

    return new Document(data)
  }
}

export default Document
