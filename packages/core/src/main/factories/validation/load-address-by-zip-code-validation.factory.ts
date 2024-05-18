import { validation } from '@/main/helpers'
import { Validation } from '@/presentation/contracts'

export const makeLoadAddressByZipCodeValidation = (): Validation => {
  return validation({
    zipCode: { required: true, len: { equal: 8 } }
  })
}
