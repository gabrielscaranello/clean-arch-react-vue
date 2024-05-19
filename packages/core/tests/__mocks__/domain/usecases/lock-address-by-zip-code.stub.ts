import { Address, LoadAddressByZipCode } from '@core/domain'
import { mockAddress } from '@mocks/domain'

export class LoadAddressByZipCodeStub implements LoadAddressByZipCode {
  async load(): Promise<Address> {
    return await Promise.resolve(mockAddress())
  }
}
