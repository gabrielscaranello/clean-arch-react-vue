export class RequiredFieldError extends Error {
  constructor() {
    super('Esse campo é obrigatorio.')
    this.name = 'RequiredFieldError'
  }
}
