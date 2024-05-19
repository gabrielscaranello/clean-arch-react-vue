export class InvalidLengthError extends Error {
  constructor(length: number) {
    super(`Esse campo deve ter ${length} caracteres.`)
    this.name = 'InvalidLengthError'
  }
}
