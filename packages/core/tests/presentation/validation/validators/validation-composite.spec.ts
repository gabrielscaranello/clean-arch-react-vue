import { Validation } from '~core/presentation/contracts'
import { ValidationComposite } from '~core/presentation/validation'
import { faker, fakerUnique } from '~mocks/faker'
import { ValidationStub } from '~mocks/presentation'

interface SutType {
  sut: ValidationComposite
  validationStub: Validation
}

export const makeSut = (): SutType => {
  const validationStub = new ValidationStub()
  const sut = new ValidationComposite([validationStub, validationStub])
  return { sut, validationStub }
}

describe('presentation/validation/validators/validation-composite', () => {
  const fieldName = faker.database.column()
  const field2Name = fakerUnique(() => faker.database.column(), { exclude: [fieldName] })()
  const firstError = faker.string.alpha()
  const secondError = fakerUnique(() => faker.string.alpha(), { exclude: [firstError] })()
  const input = { [fieldName]: faker.string.alpha() }

  it('should call all validations with correct input', () => {
    const { sut, validationStub } = makeSut()
    vi.spyOn(validationStub, 'validate')

    sut.validate(input)

    expect(validationStub.validate).toHaveBeenCalledWith(input)
  })

  it('should return first error if validation of some field fails', () => {
    const { sut, validationStub } = makeSut()
    vi.spyOn(validationStub, 'validate')
      .mockReturnValueOnce({ errors: { [fieldName]: firstError }, isValid: false })
      .mockReturnValueOnce({ errors: { [fieldName]: secondError }, isValid: false })

    const result = sut.validate(input)

    expect(result.isValid).toBe(false)
    expect(result.errors).toEqual({ [fieldName]: firstError })
  })

  it('should return second validation error if only second validation fails', () => {
    const { sut, validationStub } = makeSut()
    vi.spyOn(validationStub, 'validate')
      .mockReturnValueOnce({ errors: {}, isValid: true })
      .mockReturnValueOnce({ errors: { [fieldName]: secondError }, isValid: false })

    const result = sut.validate(input)

    expect(result.isValid).toBe(false)
    expect(result.errors).toEqual({ [fieldName]: secondError })
  })

  it('should return many fields validation', () => {
    const { sut, validationStub } = makeSut()
    vi.spyOn(validationStub, 'validate')
      .mockReturnValueOnce({ errors: { [fieldName]: firstError }, isValid: false })
      .mockReturnValueOnce({ errors: { [field2Name]: secondError }, isValid: false })

    const result = sut.validate(input)

    expect(result.isValid).toBe(false)
    expect(result.errors).toEqual({ [fieldName]: firstError, [field2Name]: secondError })
  })

  it('should return isValid as true if all validations succeeds', () => {
    const { sut } = makeSut()

    const result = sut.validate(input)

    expect(result.isValid).toBe(true)
    expect(result.errors).toEqual({})
  })
})
