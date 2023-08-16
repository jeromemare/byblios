const SearchService = require('../lib/search-service')

test.only('shall search a document', async () => {
  const reference = await SearchService.search('cixin')
  expect(reference).toBeDefined()
  expect(reference).toEqual({
    author: 'Sundberg, Minna',
    title: 'Stand still stay silent 1',
    year: '2018',
    summary:
      "Une équipe d'explorateurs nordiques se lance dans la première mission officielle qui consiste à redécouvrir le vieux monde oublié depuis la grande maladie. Electre 2019",
    isbn: '9782355743535',
    price: '29 EUR',
    editor: 'Talence (Gironde) : Akileos, 2018',
    materialDescription: '1 vol. (320 p.) : illustrations en couleur ; 26 x 19 cm',
    documentsList: [
      {
        availableOn: '24/1/2020',
        index: 'BDTC Sta 1',
        library: 'Médiathèque José Cabanis',
        localisation: 'Prêté',
        type: 'Bande-dessinée',
      },
    ],
  })
}, 600000)
