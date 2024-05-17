import { LoadAddressByZipCode } from '~core/domain'
import { Validation } from '~core/presentation/contracts'
import {
  RemoteLoadAddressByZipCodeController,
  RemoteLoadAddressByZipCodeControllerParams
} from '~core/presentation/controllers'
import { LoadAddressByZipCodeStub } from '~mocks/domain'
import { faker } from '~mocks/faker'
import { ValidationStub } from '~mocks/presentation'

interface SutTypes {
  sut: RemoteLoadAddressByZipCodeController
  validationStub: Validation
  gatewayStub: LoadAddressByZipCode
}

const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  const gatewayStub = new LoadAddressByZipCodeStub()
  const sut = new RemoteLoadAddressByZipCodeController(gatewayStub, validationStub)
  return { sut, validationStub, gatewayStub }
}

describe('presentation/controllers/load-address-by-zip-code', () => {
  const params: RemoteLoadAddressByZipCodeControllerParams = { zipCode: faker.location.zipCode() }

  it('should call validation with correct value', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = vi.spyOn(validationStub, 'validate')

    await sut.handle(params)

    expect(validateSpy).toHaveBeenCalledWith(params)
  })

  it('should call gateway with correct value', async () => {
    const { sut, gatewayStub } = makeSut()
    const loadSpy = vi.spyOn(gatewayStub, 'load')

    await sut.handle(params)

    expect(loadSpy).toHaveBeenCalledWith(params)
  })

  it('should throws if validation fails', async () => {
    const error = new Error()
    const { sut, validationStub } = makeSut()
    vi.spyOn(validationStub, 'validate').mockReturnValueOnce({ isValid: false, errors: {} })

    const promise = sut.handle(params)

    await expect(promise).rejects.toThrow(error)
  })

  it('should throws if gateway fails', async () => {
    const error = new Error()
    const { sut, gatewayStub } = makeSut()
    vi.spyOn(gatewayStub, 'load').mockRejectedValueOnce(error)

    const promise = sut.handle(params)

    await expect(promise).rejects.toThrow(error)
  })

  it('should return address on success', async () => {
    const { sut } = makeSut()

    const address = await sut.handle(params)

    expect(address).toEqual(
      expect.objectContaining({
        city: expect.any(String),
        state: expect.any(String),
        zipCode: expect.any(String)
      })
    )
  })
})
