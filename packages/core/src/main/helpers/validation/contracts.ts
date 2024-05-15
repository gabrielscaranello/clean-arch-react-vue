interface LengthValidator {
  equal?: number
}

interface Validator {
  required?: boolean
  len?: LengthValidator
}

export type Schema = Record<string, Validator>
