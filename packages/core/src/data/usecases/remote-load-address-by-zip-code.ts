import { Address, LoadAddressByZipCode, LoadAddressByZipCodeParams } from '@core/domain'

export class RemoteLoadAddressByZipCode implements LoadAddressByZipCode {
  constructor(private readonly gateway: LoadAddressByZipCode) {}

  async load(params: LoadAddressByZipCodeParams): Promise<Address> {
    return await this.gateway.load(params)
  }
}
