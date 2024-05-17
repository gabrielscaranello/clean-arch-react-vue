import { LoadAddressByZipCode } from '~core/domain'
import { AxiosHttpClient } from '~core/infra'
import { ViaCepGateway } from '~core/infra/gateways'

export const makeViaCepGateway = (): LoadAddressByZipCode => {
  const httpClient = new AxiosHttpClient()
  const baseURL = 'https://viacep.com.br/ws'
  return new ViaCepGateway(httpClient, baseURL)
}
