import { makeLoadAddressByZipCodeValidation, makeViaCepGateway } from '~core/main/factories'
import { RemoteLoadAddressByZipCodeController } from '~core/presentation/controllers'

export const makeRemoteLoadAddressByZipCodeController =
  (): RemoteLoadAddressByZipCodeController => {
    const gateway = makeViaCepGateway()
    const validator = makeLoadAddressByZipCodeValidation()
    return new RemoteLoadAddressByZipCodeController(gateway, validator)
  }
