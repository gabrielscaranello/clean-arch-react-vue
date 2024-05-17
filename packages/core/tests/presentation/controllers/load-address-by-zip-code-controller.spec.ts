import { LoadAddressByZipcode } from '~core/domain'
import { Validation } from '~core/presentation/contracts'
import { RemoteLoadAddressByZipCodeController } from '~core/presentation/controllers'
import { InputDto } from '~core/presentation/controllers/contracts'
import { LoadAddressByZipcodeStub } from '~mocks/domain'
import { faker } from '~mocks/faker'
import { ValidationStub } from '~mocks/presentation'

interface SutTypes {
  sut: RemoteLoadAddressByZipCodeController
  validationStub: Validation
  gatewayStub: LoadAddressByZipcode
}

const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  const gatewayStub = new LoadAddressByZipcodeStub()
  const sut = new RemoteLoadAddressByZipCodeController(gatewayStub, validationStub)
  return { sut, validationStub, gatewayStub }
}

describe('presentation/controllers/load-address-by-zip-code', () => {
  const input: InputDto = { zipCode: faker.location.zipCode() }

  it('should call validation with correct value', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = vi.spyOn(validationStub, 'validate')

    await sut.handle(input)

    expect(validateSpy).toHaveBeenCalledWith(input)
  })

  it('should call gateway with correct value', async () => {
    const { sut, gatewayStub } = makeSut()
    const loadSpy = vi.spyOn(gatewayStub, 'load')

    await sut.handle(input)

    expect(loadSpy).toHaveBeenCalledWith(input.zipCode)
  })

  it('should throws if validation fails', async () => {
    const error = new Error()
    const { sut, validationStub } = makeSut()
    vi.spyOn(validationStub, 'validate').mockReturnValueOnce({ isValid: false, errors: {} })

    const promise = sut.handle(input)

    await expect(promise).rejects.toThrow(error)
  })

  it('should throws if gateway fails', async () => {
    const error = new Error()
    const { sut, gatewayStub } = makeSut()
    vi.spyOn(gatewayStub, 'load').mockRejectedValueOnce(error)

    const promise = sut.handle(input)

    await expect(promise).rejects.toThrow(error)
  })

  it('should return address on success', async () => {
    const { sut } = makeSut()

    const address = await sut.handle(input)

    expect(address).toEqual(
      expect.objectContaining({
        city: expect.any(String),
        state: expect.any(String),
        zipCode: expect.any(String)
      })
    )
  })
})
