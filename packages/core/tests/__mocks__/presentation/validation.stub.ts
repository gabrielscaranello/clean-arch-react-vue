import { Validation, ValidationInput, ValidationResult } from '@/presentation/contracts'

export class ValidationStub implements Validation {
  validate<T extends ValidationInput>(): ValidationResult<T> {
    return { isValid: true, errors: {} }
  }
}
