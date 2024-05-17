import { Address, LoadAddressByZipCode } from '~core/domain'
import { Controller, Validation } from '~core/presentation/contracts'

import { RemoteLoadAddressByZipCodeControllerParams } from './contracts'

export class RemoteLoadAddressByZipCodeController
  implements Controller<RemoteLoadAddressByZipCodeControllerParams, Address> {
  constructor(
    private readonly gateway: LoadAddressByZipCode,
    private readonly validator: Validation
  ) {}

  async handle(params: RemoteLoadAddressByZipCodeControllerParams): Promise<Address> {
    const validation = this.validator.validate(params)
    if (!validation.isValid) throw new Error()

    return await this.gateway.load(params)
  }
}
