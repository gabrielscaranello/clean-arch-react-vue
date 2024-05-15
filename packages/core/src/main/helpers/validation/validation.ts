import { Validation } from '~core/presentation/contracts'
import {
  LengthValidation,
  RequiredFieldValidation,
  ValidationComposite
} from '~core/presentation/validation'

import { Schema } from './contracts'

export const validation = (schema: Schema): Validation => {
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
