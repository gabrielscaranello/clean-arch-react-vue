import { Address } from '@/domain/models'

export interface LoadAddressByZipCodeParams {
  zipCode: string
}

export interface LoadAddressByZipCode {
  load: (params: LoadAddressByZipCodeParams) => Promise<Address>
}
