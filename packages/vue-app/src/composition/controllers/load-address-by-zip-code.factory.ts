import { makeLoadAddressByZipCodeValidation, makeRemoteLoadAddressByZipCodeController } from '@core'
import {
  LoadAddressByZipCodeController,
  makeLoadAddressByZipCodeController
} from '@vue-app/controllers'

export const useLoadAddressByZipCodeController = (): LoadAddressByZipCodeController => {
  const controller = makeRemoteLoadAddressByZipCodeController()
  const validator = makeLoadAddressByZipCodeValidation()
  return makeLoadAddressByZipCodeController(controller, validator)
}
