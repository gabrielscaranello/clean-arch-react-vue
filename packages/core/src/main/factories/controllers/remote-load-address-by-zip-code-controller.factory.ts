import { makeLoadAddressByZipCodeValidation, makeViaCepGateway } from '@/main/factories'
import { Controller } from '@/presentation/contracts'
import { RemoteLoadAddressByZipCodeController } from '@/presentation/controllers'

export const makeRemoteLoadAddressByZipCodeController = (): Controller => {
  const gateway = makeViaCepGateway()
  const validator = makeLoadAddressByZipCodeValidation()
  return new RemoteLoadAddressByZipCodeController(gateway, validator)
}
