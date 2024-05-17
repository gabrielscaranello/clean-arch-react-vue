import { RemoteLoadAddressByZipcode } from '~core/data/usecases'
import { LoadAddressByZipcode, LoadAddressByZipcodeParams } from '~core/domain'
import { LoadAddressByZipcodeStub, mockAddress } from '~mocks/domain'
import { faker } from '~mocks/faker'

interface SutTypes {
  sut: RemoteLoadAddressByZipcode
  gatewayStub: LoadAddressByZipcode
}

const makeSut = (): SutTypes => {
  const gatewayStub = new LoadAddressByZipcodeStub()
  const sut = new RemoteLoadAddressByZipcode(gatewayStub)

  return { sut, gatewayStub }
}

describe('data/usecases/remote-load-address-by-zip-code', () => {
  const params: LoadAddressByZipcodeParams = { zipCode: faker.location.zipCode() }

  it('should be call gateway with correct values', async () => {
    const { sut, gatewayStub } = makeSut()
    const loadSpy = vi.spyOn(gatewayStub, 'load')

    await sut.load(params)

    expect(loadSpy).toHaveBeenCalledWith(params)
  })

  it('should return address on success', async () => {
    const { sut, gatewayStub } = makeSut()
    const mockedAddress = mockAddress()
    vi.spyOn(gatewayStub, 'load').mockResolvedValueOnce(mockedAddress)

    const address = await sut.load(params)

    expect(address).toEqual(mockedAddress)
  })

  it('should throw if gateway throws', async () => {
    const error = new Error(faker.lorem.word())
    const { sut, gatewayStub } = makeSut()
    vi.spyOn(gatewayStub, 'load').mockRejectedValueOnce(error)

    const promise = sut.load(params)

    await expect(promise).rejects.toThrow(error)
  })
})
