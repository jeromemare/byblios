const http = require('http')
// eslint-disable-next-line import/no-extraneous-dependencies
const yakbak = require('yakbak')

const server = http.createServer(
  yakbak('http://catalogues.toulouse.fr', {
    dirname: `${__dirname}/../__tapes__`,
  }),
)

server.listen(3000)
