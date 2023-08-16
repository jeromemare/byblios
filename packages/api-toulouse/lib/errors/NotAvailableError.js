/**
 * Erreur indiquant que le service n'est pas disponible
 */
class NotAvailableError extends Error {
  constructor(message, cause) {
    super(message)
    this.cause = cause
    this.name = 'NotAvailableError'
  }
}

export default NotAvailableError
