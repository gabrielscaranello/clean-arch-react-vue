import { Address } from '~core/domain/models'

export interface LoadAddressByZipcode {
  load: (zipcode: string) => Promise<Address>
}
