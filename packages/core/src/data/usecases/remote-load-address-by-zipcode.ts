import { Address, LoadAddressByZipcode } from '~core/domain'

export class RemoteLoadAddressByZipcode implements LoadAddressByZipcode {
  constructor(private readonly gateway: LoadAddressByZipcode) {}

  async load(zipcode: string): Promise<Address> {
    return await this.gateway.load(zipcode)
  }
}
