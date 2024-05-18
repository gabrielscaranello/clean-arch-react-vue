import { HttpClient } from '@/data/contracts'
import { AxiosHttpClient } from '@/infra'

export const makeHttpClient = (): HttpClient => {
  return new AxiosHttpClient()
}
