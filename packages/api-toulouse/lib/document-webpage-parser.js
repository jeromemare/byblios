import * as cheerio from 'cheerio'
import cheerioTableparser from 'cheerio-tableparser'
import _ from 'lodash'

/**
 * Implémentation du parser pour chaque donnée du document
 */
const parser = {
  type({ webPage }) {
    const typesByCode = {
      a: 'livre',
      b: 'inconnu',
      c: 'inconnu',
      d: 'inconnu',
      e: 'inconnu',
      f: 'inconnu',
      g: 'dvd',
      k: 'image',
      i: 'audio-livre',
    }

    const typeCode = webPage.match(/Graphics\/Material_([a-z])\.gif/)
    const type =
      (typeCode && typeCode[1] && typesByCode[typeCode[1]]) || `code:${typeCode && typeCode[1]}`
    return type
  },
  id({ webPage }) {
    const idRegex = /do_keyword_search\/log_in\?setting_key=BMT1&servers=1home&query=(.+)&screen=hitlist.html/
    const ids = webPage.match(idRegex)
    const id = ids && ids[1]
    return id
  },
  image({ webPage }) {
    const imageUrlRegex = /src="(http:\/\/images.titelive.com\/[0-9]+\/[0-9_]+\.jpg)"/
    const images = webPage.match(imageUrlRegex)
    const image = images && images[1]
    return image
  },
  title({ $ }) {
    const titleHtml = $(
      '#contentholder > table > tbody > tr > td:nth-child(2) > table:nth-child(1) > tbody > tr > td:nth-child(2) > h1',
    )
    const title = titleHtml
      .prop('innerText')
      .replace('/', '')
      .trim()

    return title
  },
  author({ $ }) {
    const authorInfo = $('#auteur')
      .text()
      .trim()
    const [authorLabel] = authorInfo.split('-').map(text => text.trim())
    return authorLabel.replace(/^de /, '')
  },
  year({ $ }) {
    const authorInfo = $('#auteur')
      .text()
      .trim()
    const [, year] = authorInfo.split('-').map(text => text.trim())
    return year
  },
  isbn({ getDataFromDetails }) {
    const isbnData = getDataFromDetails('isbn')

    const isbnMatch = isbnData && isbnData.match(/^([\d-]+)/)

    const isbn = isbnMatch && isbnMatch.length ? isbnMatch.shift().replace(/-/g, '') : ''
    return isbn
  },
  issn({ getDataFromDetails }) {
    const issnData = getDataFromDetails('issn')

    const issnMatch = issnData && issnData.match(/^([\d-]+)/)

    const issn = issnMatch && issnMatch.length ? issnMatch.shift().replace(/-/g, '') : ''
    return issn
  },
  price({ getDataFromDetails }) {
    const isbnData = getDataFromDetails('isbn')
    const priceMatch = isbnData && isbnData.match(/[\d.\s]+EUR/)
    const price = priceMatch && priceMatch.length ? priceMatch.shift().trim() : ''
    return price
  },
  summary({ getDataFromDetails }) {
    return getDataFromDetails('summary')
  },
  editor({ getDataFromDetails }) {
    return getDataFromDetails('edition')
  },
  materialDescription({ getDataFromDetails }) {
    return getDataFromDetails('materialDescription')
  },
  copies({ copiesTable }) {
    const cleanTable = copiesTable.map(list => list.slice(1))
    let copies = []

    try {
      if (cleanTable.length > 0) {
        copies = cleanTable[0].slice(1).map((titre, i) => {
          const library = (cleanTable[0][i + 1] || '').trim()
          const index = (cleanTable[1][i + 1] || '').trim()
          const type = (cleanTable[2][i + 1] || '').trim()
          const localisation = (cleanTable[3][i + 1] || '').trim()
          const availableOn = (cleanTable[4][i + 1] || '').trim()

          return {
            library,
            type,
            index,
            localisation,
            availableOn,
          }
        })
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error.message)
    }
    return copies
      .filter(copie => !['Localisation', 'Commandé'].includes(copie.type))
      .map(copie => {
        // Dans le cas où le document est commandé
        const formatedCopie = {}
        if (copie.index.match(/XX\(/)) {
          formatedCopie.localisation = 'En commande'
          formatedCopie.availableOn = 'Prochainement'
        }
        if (copie.localisation.trim() === 'Réservé') {
          formatedCopie.availableOn = 'Prochainement'
        }
        return {
          ...copie,
          ...formatedCopie,
        }
      })
  },
}

const headersLabels = {
  title: /Titre\s:/,
  titleVariant: /Autre\svariante\sdu\stitre\s:/,
  author: /Auteur\s:/,
  isbn: /ISBN\s:/,
  issn: /ISSN\s:/,
  edition: /Éditeur\s:/,
  materialDescription: /Description\smatérielle\s:/,
  collection: /Collection\s:/,
  genres: /Genres\s:/,
  summary: /Résumé\s:/,
  description: /Description\s:/,
  keywords: /Mots\sClés\s:/,
  audio: /Audio\s:/,
  subtitles: /Sous-titrage\s:/,
  reward: /Prix\/Récompense\s:/,
  subject: /Sujet\sg:/,
  additionalAuthors: /Auteur\sadditionnel\s:/,
  realisationDate: /Réalisé\sen\s:/,
  note: /Note\s:/,
  subjectPeople: /Personne\ssujet\s:/,
  includedIn: /Contenu\sdans\s:/,
}

function parse(webPage) {
  const $ = cheerio.load(webPage, {
    decodeEntities: false,
    xmlMode: false,
  })
  cheerioTableparser($)

  const tableSelector = '#panel3 > div:nth-child(1) > table:nth-child(3)'
  // @ts-ignore parsetable est ajouté par l'utilisation de cheerioTableparser
  const table = $(tableSelector).parsetable(true, true, true)
  // @ts-ignore parsetable est ajouté par l'utilisation de cheerioTableparser
  const copiesTable = $('#exemplaire_table').parsetable(true, true, true)

  const headers = table[0]

  const headersIndexes = _.mapValues(headersLabels, label => {
    return headers.findIndex(value => {
      return label.test(value)
    })
  })

  function getDataFromDetails(data) {
    return table[1][headersIndexes[data]]
  }

  return name => parser[name]({ $, webPage, copiesTable, getDataFromDetails })
}

export default parse
