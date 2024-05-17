interface LengthValidator {
  equal?: number
}

interface Validator {
  required?: boolean
  len?: LengthValidator
}

export type ValidationSchema = Record<string, Validator>
