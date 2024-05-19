import { validation } from '@core/main/helpers'
import {
  LengthValidation,
  RequiredFieldValidation,
  Validation,
  ValidationComposite
} from '@core/presentation'
import { faker } from '@mocks/faker'

const composite = (...validators: Validation[]): ValidationComposite => {
  return new ValidationComposite(validators)
}

describe('main/helpers/validation', () => {
  const field = faker.database.column()

  it('should include RequiredFieldValidation', () => {
    const validators = validation({ [field]: { required: true } })

    expect(validators).toEqual(composite(new RequiredFieldValidation(field)))
  })

  it('should include MinLengthValidation', () => {
    const length = 10

    const validators = validation({ [field]: { len: { equal: length } } })

    expect(validators).toEqual(composite(new LengthValidation(field, length)))
  })

  it('should include all validations', () => {
    const length = 10

    const validators = validation({
      [field]: { required: true, len: { equal: length } }
    })

    expect(validators).toEqual(
      composite(new RequiredFieldValidation(field), new LengthValidation(field, length))
    )
  })
})
