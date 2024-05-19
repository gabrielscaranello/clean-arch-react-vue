import {
  LengthValidation,
  RequiredFieldValidation,
  Validation,
  ValidationComposite
} from '@core/presentation'

import { ValidationSchema } from './contracts'

export const validation = (schema: ValidationSchema): Validation => {
  const validators: Validation[] = []
  const keys = Object.keys(schema)

  for (const key of keys) {
    const { required, len } = schema[key]

    if (required) {
      validators.push(new RequiredFieldValidation(key))
    }

    if (len?.equal) {
      validators.push(new LengthValidation(key, len.equal))
    }
  }

  return new ValidationComposite(validators)
}
