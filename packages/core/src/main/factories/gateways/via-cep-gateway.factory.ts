import { LoadAddressByZipCode } from '@core/domain'
import { ViaCepGateway } from '@core/infra/gateways'
import { makeHttpClient } from '@core/main/factories'

export const makeViaCepGateway = (): LoadAddressByZipCode => {
  const httpClient = makeHttpClient()
  const baseURL = 'https://viacep.com.br/ws'
  return new ViaCepGateway(httpClient, baseURL)
}
