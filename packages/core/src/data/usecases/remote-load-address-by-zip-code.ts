import { Address, LoadAddressByZipcode, LoadAddressByZipcodeParams } from '~core/domain'

export class RemoteLoadAddressByZipcode implements LoadAddressByZipcode {
  constructor(private readonly gateway: LoadAddressByZipcode) {}

  async load(params: LoadAddressByZipcodeParams): Promise<Address> {
    return await this.gateway.load(params)
  }
}
