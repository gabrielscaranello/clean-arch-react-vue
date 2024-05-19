import { makeRemoteLoadAddressByZipCodeController } from '@core'

import {
  LoadAddressByZipCodeController,
  makeLoadAddressByZipCodeController
} from '@/presentation/controllers'

export const useLoadAddressByZipCodeController = (): LoadAddressByZipCodeController => {
  const controller = makeRemoteLoadAddressByZipCodeController()
  return makeLoadAddressByZipCodeController(controller)
}
