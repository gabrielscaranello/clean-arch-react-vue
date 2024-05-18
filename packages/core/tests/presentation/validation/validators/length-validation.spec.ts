import { faker, fakerUnique } from '@mocks/faker'

import { InvalidLengthError } from '@/presentation/errors'
import { LengthValidation } from '@/presentation/validation'

interface SutTypes {
  sut: LengthValidation
  fieldName: string
  length: number
}

const makeSut = (): SutTypes => {
  const fieldName = faker.database.column()
  const length = faker.number.int({ min: 3, max: 10 })
  const sut = new LengthValidation(fieldName, length)
  return { sut, fieldName, length }
}

describe('presentation/validation/validators/length-validation', () => {
  it('should return InvalidLengthError if length is less than expected', () => {
    const { sut, fieldName, length } = makeSut()
    const value = faker.string.alphanumeric(length - 1)
    const error = new InvalidLengthError(value.length, length)

    const result = sut.validate({ [fieldName]: value })

    expect(result.isValid).toBe(false)
    expect(result.errors).toEqual({ [fieldName]: error.message })
  })

  it('should return InvalidLengthError if length is more than expected', () => {
    const { sut, fieldName, length } = makeSut()
    const value = faker.string.alphanumeric(length + 1)
    const error = new InvalidLengthError(value.length, length)

    const result = sut.validate({ [fieldName]: value })

    expect(result.isValid).toBe(false)
    expect(result.errors).toEqual({ [fieldName]: error.message })
  })

  it('should return true if length is equal to expected', () => {
    const { sut, length, fieldName } = makeSut()

    const result = sut.validate({ [fieldName]: faker.string.alphanumeric(length) })

    expect(result.isValid).toBe(true)
    expect(result.errors[fieldName]).toBeFalsy()
  })

  it('should return false if no value is provided', () => {
    const { sut, fieldName, length } = makeSut()
    const otherFieldName = fakerUnique(() => faker.database.column(), { exclude: [fieldName] })()
    const error = new InvalidLengthError(0, length)

    const result = sut.validate({ [otherFieldName]: faker.string.alphanumeric() })

    expect(result.isValid).toBe(false)
    expect(result.errors).toEqual({ [fieldName]: error.message })
  })
})
