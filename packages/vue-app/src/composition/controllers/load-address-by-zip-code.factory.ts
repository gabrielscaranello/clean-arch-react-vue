import { makeRemoteLoadAddressByZipCodeController } from '@core'

import { LoadAddressByZipCodeController, makeLoadAddressByZipCodeController } from '@/controllers'

export const useLoadAddressByZipCodeController = (): LoadAddressByZipCodeController => {
  const controller = makeRemoteLoadAddressByZipCodeController()
  return makeLoadAddressByZipCodeController(controller)
}
