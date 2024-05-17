import { Address } from '~core/domain/models'

export interface LoadAddressByZipcodeParams {
  zipCode: string
}

export interface LoadAddressByZipcode {
  load: (params: LoadAddressByZipcodeParams) => Promise<Address>
}
