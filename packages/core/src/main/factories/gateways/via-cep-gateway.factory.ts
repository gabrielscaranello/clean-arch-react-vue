import { LoadAddressByZipCode } from '@core/domain'
import { ViaCepGateway } from '@core/infra/gateways'
import { makeHttpClient } from '@core/main/factories'

export const makeViaCepGateway = (): LoadAddressByZipCode => {
  const httpClient = makeHttpClient()
  const baseURL = import.meta.env.VITE_APP_VIACEP_URL
  return new ViaCepGateway(httpClient, baseURL)
}
