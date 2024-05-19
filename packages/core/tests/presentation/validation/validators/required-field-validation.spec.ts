import { MissingParamError, RequiredFieldValidation } from '@core/presentation'
import { faker } from '@mocks/faker'

interface SutTypes {
  sut: RequiredFieldValidation
  fieldName: string
}

const makeSut = (): SutTypes => {
  const fieldName = faker.database.column()
  const sut = new RequiredFieldValidation(fieldName)
  return { sut, fieldName }
}

describe('presentation/validation/validators/required-field-validation', () => {
  it('should return MissingParamError if validation fails', () => {
    const { sut, fieldName } = makeSut()
    const error = new MissingParamError(fieldName)

    const result = sut.validate({ [fieldName]: '' })

    expect(result.isValid).toBe(false)
    expect(result.errors).toEqual({ [fieldName]: error.message })
  })

  it('should not return if validation succeeds', () => {
    const { sut, fieldName } = makeSut()

    const result = sut.validate({ [fieldName]: faker.word.sample() })

    expect(result.isValid).toBe(true)
    expect(result.errors[fieldName]).toBeFalsy()
  })
})
