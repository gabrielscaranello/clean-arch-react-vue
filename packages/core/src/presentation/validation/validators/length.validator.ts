import { Validation, ValidationInput, ValidationResult } from '@/presentation/contracts'
import { InvalidLengthError } from '@/presentation/errors'

export class LengthValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly length: number
  ) {}

  validate<T extends ValidationInput>(input: T): ValidationResult<T> {
    let errors = {}
    const value = input[this.fieldName] as string

    if (!value) {
      const error = new InvalidLengthError(0, this.length)
      errors = { [this.fieldName]: error.message }
    } else if (value.length !== this.length) {
      const error = new InvalidLengthError(value.length, this.length)
      errors = { [this.fieldName]: error.message }
    }

    const isValid = !Object.keys(errors).length
    return { errors, isValid }
  }
}
