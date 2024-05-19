import { makeLoadAddressByZipCodeValidation, makeViaCepGateway } from '@core/main/factories'
import {
  LoadAddressByZipCodeController,
  RemoteLoadAddressByZipCodeController
} from '@core/presentation'

export const makeRemoteLoadAddressByZipCodeController = (): LoadAddressByZipCodeController => {
  const gateway = makeViaCepGateway()
  const validator = makeLoadAddressByZipCodeValidation()
  return new RemoteLoadAddressByZipCodeController(gateway, validator)
}
