import { LoadAddressByZipCode } from '@core/domain'
import {
  makeLoadAddressByZipCodeValidation,
  makeRemoteLoadAddressByZipCodeUsecase
} from '@core/main/factories'
import { Validation } from '@core/presentation'

interface LoadAddressByZipcode {
  usecase: LoadAddressByZipCode
  validator: Validation
}

export const makeLoadAddressByZipCode = (): LoadAddressByZipcode => {
  const usecase = makeRemoteLoadAddressByZipCodeUsecase()
  const validator = makeLoadAddressByZipCodeValidation()

  return { usecase, validator }
}
