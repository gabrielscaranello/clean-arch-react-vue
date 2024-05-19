import { Address, LoadAddressByZipCode } from '@core/domain'
import {
  LoadAddressByZipCodeController,
  LoadAddressByZipCodeControllerParams,
  Validation
} from '@core/presentation'

export class RemoteLoadAddressByZipCodeController implements LoadAddressByZipCodeController {
  constructor(
    private readonly gateway: LoadAddressByZipCode,
    private readonly validator: Validation
  ) {}

  async handle(params: LoadAddressByZipCodeControllerParams): Promise<Address> {
    const validation = this.validator.validate(params)
    if (!validation.isValid) throw new Error()

    return await this.gateway.load(params)
  }
}
