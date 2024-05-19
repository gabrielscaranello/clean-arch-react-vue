import { HttpClient } from '@core/data/contracts'
import { AxiosHttpClient } from '@core/infra'

export const makeHttpClient = (): HttpClient => {
  return new AxiosHttpClient()
}
