import { Address, LoadAddressByZipcode } from '~core/domain'
import { mockAddress } from '~mocks/domain'

export class LoadAddressByZipcodeStub implements LoadAddressByZipcode {
  async load(): Promise<Address> {
    return await Promise.resolve(mockAddress())
  }
}
