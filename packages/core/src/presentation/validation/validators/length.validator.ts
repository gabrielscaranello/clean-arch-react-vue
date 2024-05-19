import {
  InvalidLengthError,
  Validation,
  ValidationInput,
  ValidationResult
} from '@core/presentation'

export class LengthValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly length: number
  ) {}

  validate<T extends ValidationInput>(input: T): ValidationResult<T> {
    let errors = {}
    const value = input[this.fieldName] as string

    if (!value || value.length !== this.length) {
      const error = new InvalidLengthError(this.length)
      errors = { [this.fieldName]: error.message }
    }

    const isValid = !Object.keys(errors).length
    return { errors, isValid }
  }
}
