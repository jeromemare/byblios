/**
 * Nécessaire pour l'implémentation des buffer nodeJS
 * - Compatibilité de cheerio
 */
import { Buffer } from 'buffer'

// @ts-ignore
window.Buffer = Buffer
