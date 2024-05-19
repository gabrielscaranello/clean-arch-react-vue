import { HTTP_STATUS_CODE, HttpGetClient } from '@core/data/contracts'
import { Address, LoadAddressByZipCode, LoadAddressByZipCodeParams } from '@core/domain'

import { ViaCepLoadAddressByZipCodeResult } from './contracts'

export class ViaCepGateway implements LoadAddressByZipCode {
  constructor(
    private readonly httpClient: HttpGetClient,
    private readonly baseURL: string
  ) {}

  private getUrl(uri: string): string {
    return `${this.baseURL}/${uri}`
  }

  async load(params: LoadAddressByZipCodeParams): Promise<Address> {
    const { zipCode } = params
    const url = this.getUrl(`ws/${zipCode}/json/`)

    const result = await this.httpClient.get<ViaCepLoadAddressByZipCodeResult>({ url })
    const { body, statusCode } = result

    if (statusCode !== HTTP_STATUS_CODE.OK || !body) throw new Error()

    return {
      city: body.localidade,
      complement: body.complemento,
      neighborhood: body.bairro,
      state: body.uf,
      street: body.logradouro,
      zipCode: body.cep
    }
  }
}
