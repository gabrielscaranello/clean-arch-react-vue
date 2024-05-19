import { makeLoadAddressByZipCodeValidation, makeRemoteLoadAddressByZipCodeController } from '@core'
import {
  LoadAddressByZipCodeController,
  useLoadAddressByZipCodeControllerBuilder
} from '@react-app/controllers'

export const useLoadAddressByZipCodeController = (): LoadAddressByZipCodeController => {
  const controller = makeRemoteLoadAddressByZipCodeController()
  const validator = makeLoadAddressByZipCodeValidation()
  return useLoadAddressByZipCodeControllerBuilder(controller, validator)
}
