const [{ search, printDocuments }] = require('../../api-service.cjs')
const { Args, Command, Flags } = require('@oclif/core')

class Search extends Command {
  static description = 'Recherche'

  static examples = [
    `$ byblios search gary`,
  ]

  static flags = {
    limit: Flags.integer({char: 'l', description: 'nombre de résultats', default: 100}),
  }

  static args = {
    terms: Args.string({description: 'Termes de la recherche', required: true}),
  }

  async run() {
    const {args, flags} = await this.parse(Search)
    // setProxy(options)
    this.log(args.terms, flags)
    const reference = await search(args.terms, flags.limit)
    printDocuments(reference)
  }
}

module.exports = Search
