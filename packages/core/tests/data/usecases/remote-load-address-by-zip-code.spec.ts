import { LoadAddressByZipCodeStub, mockAddress } from '@mocks/domain'
import { faker } from '@mocks/faker'

import { RemoteLoadAddressByZipCode } from '@/data/usecases'
import { LoadAddressByZipCode, LoadAddressByZipCodeParams } from '@/domain'

interface SutTypes {
  sut: RemoteLoadAddressByZipCode
  gatewayStub: LoadAddressByZipCode
}

const makeSut = (): SutTypes => {
  const gatewayStub = new LoadAddressByZipCodeStub()
  const sut = new RemoteLoadAddressByZipCode(gatewayStub)

  return { sut, gatewayStub }
}

describe('data/usecases/remote-load-address-by-zip-code', () => {
  const params: LoadAddressByZipCodeParams = { zipCode: faker.location.zipCode() }

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
