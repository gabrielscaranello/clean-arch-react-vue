export class InvalidLengthError extends Error {
  constructor(length: number, compareTo: number) {
    super(`Invalid length: ${length} of ${compareTo} characters`)
    this.name = 'InvalidLengthError'
  }
}
