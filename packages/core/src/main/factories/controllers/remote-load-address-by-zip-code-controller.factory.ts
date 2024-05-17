import { makeLoadAddressByZipCodeValidation, makeViaCepGateway } from '~core/main/factories'
import { Controller } from '~core/presentation/contracts'
import { RemoteLoadAddressByZipCodeController } from '~core/presentation/controllers'

export const makeRemoteLoadAddressByZipCodeController = (): Controller => {
  const gateway = makeViaCepGateway()
  const validator = makeLoadAddressByZipCodeValidation()
  return new RemoteLoadAddressByZipCodeController(gateway, validator)
}
