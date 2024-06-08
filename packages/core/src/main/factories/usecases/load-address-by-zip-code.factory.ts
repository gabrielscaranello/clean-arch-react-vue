import { RemoteLoadAddressByZipCode } from '@core/data/usecases'
import { LoadAddressByZipCode } from '@core/domain'
import { makeViaCepGateway } from '@core/main/factories'

export const makeRemoteLoadAddressByZipCodeUsecase = (): LoadAddressByZipCode => {
  const viaCepGateway = makeViaCepGateway()
  return new RemoteLoadAddressByZipCode(viaCepGateway)
}
