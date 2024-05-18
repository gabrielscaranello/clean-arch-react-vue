import { LoadAddressByZipCode } from '@/domain'
import { ViaCepGateway } from '@/infra/gateways'
import { makeHttpClient } from '@/main/factories'

export const makeViaCepGateway = (): LoadAddressByZipCode => {
  const httpClient = makeHttpClient()
  const baseURL = 'https://viacep.com.br/ws'
  return new ViaCepGateway(httpClient, baseURL)
}
