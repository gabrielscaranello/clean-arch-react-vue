import { RemoteLoadAddressByZipcode } from '~core/data/usecases'
import { Address, LoadAddressByZipcode } from '~core/domain'

interface SutTypes {
  sut: RemoteLoadAddressByZipcode
  gatewayStub: LoadAddressByZipcode
}

const makeSut = (): SutTypes => {
  class RemoteLoadAddressByZipcodeStub implements LoadAddressByZipcode {
    async load(): Promise<Address> {
      return await Promise.resolve({
        city: 'any_city',
        state: 'any_state',
        number: 'any_number',
        street: 'any_street',
        zipcode: 'any_zipcode',
        complement: '',
        neighborhood: ''
      })
    }
  }

  const gatewayStub = new RemoteLoadAddressByZipcodeStub()
  const sut = new RemoteLoadAddressByZipcode(gatewayStub)

  return { sut, gatewayStub }
}

describe('data/usecases/remote-load-address-by-zipcode', () => {
  const zipcode = 'any_zipcode'

  it('should be call gateway with correct values', async () => {
    const { sut, gatewayStub } = makeSut()
    const loadSpy = vi.spyOn(gatewayStub, 'load')

    await sut.load(zipcode)

    expect(loadSpy).toHaveBeenCalledWith(zipcode)
  })

  it('should return address on success', async () => {
    const { sut } = makeSut()
    const address = await sut.load(zipcode)

    expect(address).toEqual({
      city: 'any_city',
      state: 'any_state',
      number: 'any_number',
      street: 'any_street',
      zipcode: 'any_zipcode',
      complement: '',
      neighborhood: ''
    })
  })

  it('should throw if gateway throws', async () => {
    const error = new Error('any_error')
    const { sut, gatewayStub } = makeSut()
    vi.spyOn(gatewayStub, 'load').mockRejectedValueOnce(error)

    const promise = sut.load(zipcode)

    await expect(promise).rejects.toThrow(error)
  })
})
