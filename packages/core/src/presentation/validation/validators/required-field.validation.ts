import { Validation, ValidationInput, ValidationResult } from '@/presentation/contracts'
import { MissingParamError } from '@/presentation/errors'

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
