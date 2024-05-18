import { mockAddress } from '@mocks/domain'

import { Address, LoadAddressByZipCode } from '@/domain'

export class LoadAddressByZipCodeStub implements LoadAddressByZipCode {
  async load(): Promise<Address> {
    return await Promise.resolve(mockAddress())
  }
}
