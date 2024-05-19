import { Validation, ValidationErrors, ValidationInput, ValidationResult } from '@core/presentation'

export class ValidationComposite implements Validation {
  constructor(private readonly validations: Validation[]) {}

  validate<T extends ValidationInput>(input: T): ValidationResult<T> {
    let errors = {}

    for (const validation of this.validations) {
      const result = validation.validate(input)

      if (result.isValid) continue
      errors = this.mergeErrors(errors, result.errors)
    }

    const isValid = !Object.keys(errors).length
    return { errors, isValid }
  }

  private mergeErrors<T extends ValidationInput>(
    errors: ValidationErrors<T>,
    newErrors: ValidationErrors<T>
  ): ValidationErrors<T> {
    const result = { ...errors }

    for (const key in newErrors) {
      if (result[key]) continue
      result[key] = newErrors[key]
    }

    return result
  }
}
