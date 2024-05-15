export type ValidationInput = Record<string, any>

export type ValidationErrors<T extends ValidationInput> = {
  [K in keyof T]?: string
}

export interface ValidationResult<T extends ValidationInput> {
  errors: ValidationErrors<T>
  isValid: boolean
}

export interface Validation {
  validate: <T extends ValidationInput = ValidationInput>(input: T) => ValidationResult<T>
}
