import { Validation, ValidationInput, ValidationResult } from '~core/presentation/contracts'

export class ValidationStub implements Validation {
  validate<T extends ValidationInput>(): ValidationResult<T> {
    return { isValid: true, errors: {} }
  }
}
