import { Address } from '~core/domain/models'

export interface LoadAddressByZipcode {
  load: (zipCode: string) => Promise<Address>
}
