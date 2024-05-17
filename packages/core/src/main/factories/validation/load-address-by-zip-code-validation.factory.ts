import { validation } from '~core/main/helpers'
import { Validation } from '~core/presentation/contracts'

export const makeLoadAddressByZipCodeValidation = (): Validation => {
  return validation({
    zipCode: { required: true, len: { equal: 8 } }
  })
}
