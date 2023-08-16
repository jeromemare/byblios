const sinon = require('sinon')
const axios = require('axios')

const SearchService = require('../lib/search-service')

const loginPage = require('./__fixtures__/login-page')
const resultPage = require('./__fixtures__/search-single-result-page')
const resultPageMultiCopies = require('./__fixtures__/search-single-result-with-multiple-copy-page')
const resultPageIsbn = require('./__fixtures__/document-result/emile-bravo-boucle-d-or')
const resultPageVideo = require('./__fixtures__/document-result/emile-bravo-ma-maman')
const resultPageMultiReferences = require('./__fixtures__/search-multi-result')

test('shall search a single document', async () => {
  const getStub = sinon.stub(axios, 'get')
  getStub.onCall(0).returns(Promise.resolve({ data: loginPage }))
  const requestStub = sinon.stub(axios, 'request')
  requestStub.onCall(0).returns(Promise.resolve({ data: resultPage }))

  const reference = await SearchService.search('9782355743535')
  expect(reference).toBeDefined()
  expect(reference).toEqual({
    id: 'ELC5208543',
    type: 'livre',
    author: 'Sundberg, Minna',
    title: 'Stand still stay silent 1',
    year: '2018',
    summary:
      "Une équipe d'explorateurs nordiques se lance dans la première mission officielle qui consiste à redécouvrir le vieux monde oublié depuis la grande maladie. Electre 2019",
    isbn: '9782355743535',
    price: '29 EUR',
    editor: 'Talence (Gironde) : Akileos, 2018',
    materialDescription: '1 vol. (320 p.) : illustrations en couleur ; 26 x 19 cm',
    copies: [
      {
        availableOn: '24/1/2020',
        index: 'BDTC Sta 1',
        library: 'Médiathèque José Cabanis',
        localisation: 'Prêté',
        type: 'Bande-dessinée',
      },
    ],
  })
  getStub.restore()
  requestStub.restore()
})

test('shall search single document with multiple copies', async () => {
  const getStub = sinon.stub(axios, 'get')
  getStub.onCall(0).returns(Promise.resolve({ data: loginPage }))
  const requestStub = sinon.stub(axios, 'request')
  requestStub.onCall(0).returns(Promise.resolve({ data: resultPageMultiCopies }))

  const reference = await SearchService.search('9782919242078')
  expect(reference).toBeDefined()
  expect(reference).toEqual({
    id: 'ELC1432908',
    type: 'livre',
    author: 'Picard, Matthias',
    editor: 'Strasbourg : 2024, 2012',
    isbn: '9782919242078',
    materialDescription: '[N.p.] : illustrations en couleur ; 34 x 25 cm + 2 paires de lunettes 3D',
    price: '19 EUR',
    summary:
      "Bien calé dans son scaphandrier, Jim Curious plonge explorer les fonds marins. Dès son passage sous l'eau, l'image s'enrichit du relief grâce aux images en 3D. Jim croise des poissons, des monstres et d'autres bêtes de plus en plus étranges. Plus il chute dans l'eau, plus il remonte le temps : épaves de la Seconde Guerre mondiale, cité de l'Atlantide...",
    title: "Jim Curious : voyage au coeur de l'océan",
    year: '2012',
    copies: [
      {
        availableOn: '28/1/2020',
        index: 'AT PICA',
        library: 'Médiathèque José Cabanis',
        localisation: 'Prêté',
        type: 'Texte imprimé pour tout public',
      },
      {
        availableOn: 'Prochainement',
        index: '',
        library: 'Médiathèque José Cabanis',
        localisation: 'En cours de catalogage',
        type: "Commandé (date d'arrivée inconnue)",
      },
      {
        availableOn: '',
        index: 'BD JIM',
        library: 'Médiathèque Empalot',
        localisation: 'Document indisponible, acheminement en cours',
        type: 'Texte imprimé pour tout public',
      },
      {
        availableOn: '16/1/2020',
        index: 'BD JIM',
        library: 'Médiathèque Fabre',
        localisation: 'Prêté',
        type: 'Texte imprimé pour tout public',
      },
      {
        availableOn: '30/1/2020',
        index: 'BD JIM',
        library: 'Bibliothèque Pinel',
        localisation: 'Prêté',
        type: 'Texte imprimé pour tout public',
      },
    ],
  })
  getStub.restore()
  requestStub.restore()
})

test('shall search single document with multiple references', async () => {
  const getStub = sinon.stub(axios, 'get')
  getStub.onCall(0).returns(Promise.resolve({ data: loginPage }))
  const requestStub = sinon.stub(axios, 'request')
  requestStub.onCall(0).returns(Promise.resolve({ data: resultPageMultiReferences }))
  requestStub.onCall(1).returns(Promise.resolve({ data: resultPageMultiCopies }))
  requestStub.onCall(2).returns(Promise.resolve({ data: resultPageMultiCopies }))
  requestStub.onCall(3).returns(Promise.resolve({ data: resultPageMultiCopies }))
  requestStub.onCall(4).returns(Promise.resolve({ data: resultPageMultiCopies }))
  requestStub.onCall(5).returns(Promise.resolve({ data: resultPageMultiCopies }))
  requestStub.onCall(6).returns(Promise.resolve({ data: resultPageMultiCopies }))
  requestStub.onCall(7).returns(Promise.resolve({ data: resultPageMultiCopies }))
  requestStub.onCall(8).returns(Promise.resolve({ data: resultPageMultiCopies }))

  const reference = await SearchService.search('cixin')
  expect(reference).toBeDefined()
  expect(reference).toBeInstanceOf(Array)
  getStub.restore()
  requestStub.restore()
})

test('shall handle correctly isbn', async () => {
  const getStub = sinon.stub(axios, 'get')
  getStub.onCall(0).returns(Promise.resolve({ data: loginPage }))
  const requestStub = sinon.stub(axios, 'request')
  requestStub.onCall(0).returns(Promise.resolve({ data: resultPageIsbn }))

  const reference = await SearchService.search('9782919242078')
  expect(reference).toBeDefined()
  expect(reference).toEqual({
    author: 'Bravo, Emile',
    copies: [
      {
        availableOn: '',
        index: 'C Bouc BRA',
        library: 'Bibliothèque nomade',
        localisation: 'Dépôt - Document accessible sur demande',
        type: 'Texte imprimé pour tout public',
      },
      {
        availableOn: '',
        index: 'C Bouc BRA',
        library: 'Bibliothèque nomade',
        localisation: 'Dépôt - Document accessible sur demande',
        type: 'Texte imprimé pour tout public',
      },
      {
        availableOn: '29/1/2020',
        index: 'BD OURS',
        library: 'Médiathèque Danièle Damin',
        localisation: 'Prêté',
        type: 'Texte imprimé pour tout public',
      },
      {
        availableOn: '',
        index: 'OUR/1',
        library: 'Bibliothèque Pont des demoiselles',
        localisation: 'Enfants : Bandes-dessinées',
        type: 'Texte imprimé pour tout public',
      },
      {
        availableOn: '',
        index: 'CE/Bouc BRA',
        library: 'Bibliothèque Duranti',
        localisation: 'Enfants : Contes',
        type: 'Texte imprimé pour tout public',
      },
      {
        availableOn: '28/1/2020',
        index: 'BD BOU',
        library: 'Médiathèque Empalot',
        localisation: 'Prêté',
        type: 'Texte imprimé pour tout public',
      },
      {
        availableOn: '5/2/2020',
        index: 'BDE BOU',
        library: 'Médiathèque Fabre',
        localisation: 'Prêté',
        type: 'Texte imprimé pour tout public',
      },
      {
        availableOn: '',
        index: 'FCJ D 30011',
        library: 'Fonds de conservation jeunesse',
        localisation: 'Magasin Fonds de conservation jeunesse',
        type: 'Consultation sur place - Communiqué sur demande',
      },
      {
        availableOn: '',
        index: 'C Bouc  BRA',
        library: 'Médiathèque Grand M',
        localisation: 'Enfants : Contes',
        type: 'Texte imprimé pour tout public',
      },
      {
        availableOn: '25/1/2020',
        index: 'BD BRA',
        library: 'Médiathèque Serveyrolles',
        localisation: 'Prêté',
        type: 'Texte imprimé pour tout public',
      },
    ],
    editor: 'Paris : Seuil Jeunesse, 2004',
    id: '2004030814',
    isbn: '2020620189',
    materialDescription: '26 p. : ill. en coul. ; 18 x 25 cm',
    price: '9.00 EUR',
    summary: undefined,
    title: "Boucle d'or et les sept ours nains",
    type: 'livre',
    year: '2004',
  })
  getStub.restore()
  requestStub.restore()
})

test('shall handle correctly videos', async () => {
  const getStub = sinon.stub(axios, 'get')
  getStub.onCall(0).returns(Promise.resolve({ data: loginPage }))
  const requestStub = sinon.stub(axios, 'request')
  requestStub.onCall(0).returns(Promise.resolve({ data: resultPageVideo }))

  const reference = await SearchService.search('9782919242078')
  expect(reference).toBeDefined()
  expect(reference).toEqual({
    author: 'Boreal, Marc',
    copies: [
      {
        availableOn: '',
        index: 'A MAMA',
        library: 'Médiathèque José Cabanis',
        localisation: 'Réserve pôle Cinéma',
        type: 'Film tout public',
      },
      {
        availableOn: '7/2/2020',
        index: '',
        library: 'Médiathèque José Cabanis',
        localisation: 'Prêté',
        type: 'Film tout public',
      },
      {
        availableOn: '',
        index: 'Anim MAMA',
        library: 'Médiathèque José Cabanis',
        localisation: 'RdeJ - Enfants : Cinéma',
        type: 'Film tout public',
      },
      {
        availableOn: 'Prochainement',
        index: '',
        library: 'Médiathèque José Cabanis',
        localisation: 'En traitement',
        type: 'Film tout public',
      },
      {
        availableOn: '',
        index: '',
        library: 'Médiathèque José Cabanis',
        localisation: 'Réserve au pôle Jeunesse',
        type: 'Film tout public',
      },
      {
        availableOn: '',
        index: 'A MAMA',
        library: 'Bibliothèque nomade',
        localisation: 'Dépôt - Document accessible sur demande',
        type: 'Film tout public',
      },
      {
        availableOn: '',
        index: 'A MAMA',
        library: 'Médiathèque Saint-Cyprien',
        localisation: 'Enfants : Films',
        type: 'Film tout public',
      },
      {
        availableOn: '',
        index: 'A MAMA',
        library: 'Médiathèque Danièle Damin',
        localisation: 'Enfants : Films',
        type: 'Film tout public',
      },
      {
        availableOn: '5/2/2020',
        index: 'A MAMA',
        library: 'Bibliothèque Duranti',
        localisation: 'Prêté',
        type: 'Film tout public',
      },
      {
        availableOn: '',
        index: 'A MAMA',
        library: 'Médiathèque Empalot',
        localisation: 'Enfants : Films',
        type: 'Film tout public',
      },
      {
        availableOn: 'Prochainement',
        index: 'A MAMA',
        library: 'Médiathèque Saint-Exupery',
        localisation: 'En réparation',
        type: 'Texte imprimé pour tout public',
      },
      {
        availableOn: 'Prochainement',
        index: 'A MAMA',
        library: 'Médiathèque Fabre',
        localisation: 'Fonds de réserve : Doc. à demander',
        type: 'Film tout public',
      },
      {
        availableOn: '',
        index: 'A MAMA',
        library: 'Médiathèque Grand M',
        localisation: 'Enfants : Films',
        type: 'Film tout public',
      },
      {
        availableOn: 'Prochainement',
        index: '',
        library: 'Médiathèque Grand M',
        localisation: 'Fonds de réserve : Doc. à demander',
        type: 'Film tout public',
      },
      {
        availableOn: '23/1/2020',
        index: 'A MAMA',
        library: 'Médiathèque des Minimes',
        localisation: 'Prêté',
        type: 'Film tout public',
      },
      {
        availableOn: '',
        index: 'A MAMA',
        library: 'Médiathèque Côte Pavée',
        localisation: 'Enfants : Films',
        type: 'Film tout public',
      },
      {
        availableOn: '',
        index: 'A MAMA',
        library: 'Pradettes',
        localisation: 'Enfants : Films',
        type: 'Film tout public',
      },
      {
        availableOn: '',
        index: 'A MAMA',
        library: 'Médiathèque Rangueil',
        localisation: 'Enfants : Films',
        type: 'Film tout public',
      },
      {
        availableOn: '',
        index: 'A MAMA',
        library: 'Médiathèque Serveyrolles',
        localisation: 'Enfants : Films',
        type: 'Film tout public',
      },
    ],
    editor: 'Issy-les-Moulineaux : Studio Canal vidéo, 2014',
    id: 'nADAV180270',
    isbn: '',
    materialDescription: '1 DVD ; 1 h 12 min',
    price: '',
    summary: undefined,
    title: 'Ma maman est en Amérique, elle a rencontré Buffalo Bill',
    type: 'dvd',
    year: '2014',
  })
  getStub.restore()
  requestStub.restore()
})
