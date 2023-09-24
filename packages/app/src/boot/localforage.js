import { boot } from 'quasar/wrappers'

import localforage from 'localforage'

export default boot(({ app }) => {
  app.config.globalProperties.$vlf = localforage
})
