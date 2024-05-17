import { Address, LoadAddressByZipcode } from '~core/domain'
import { Validation } from '~core/presentation/contracts'

import { InputDto } from './contracts'

export class RemoteLoadAddressByZipCodeController {
  constructor(
    private readonly gateway: LoadAddressByZipcode,
    private readonly validator: Validation
  ) {}

  async handle(input: InputDto): Promise<Address> {
    const validation = this.validator.validate(input)
    if (!validation.isValid) throw new Error()

    return await this.gateway.load(input.zipCode)
  }
}
