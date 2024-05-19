import {
  MissingParamError,
  Validation,
  ValidationInput,
  ValidationResult
} from '@core/presentation'

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  validate<T extends ValidationInput>(input: T): ValidationResult<T> {
    let errors = {}

    if (!input[this.fieldName]) {
      const error = new MissingParamError(this.fieldName)
      errors = { [this.fieldName]: error.message }
    }

    const isValid = !Object.keys(errors).length
    return { errors, isValid }
  }
}
