import { RemoteLoadAddressByZipCode } from '@/data/usecases'
import { LoadAddressByZipCode } from '@/domain'
import { makeViaCepGateway } from '@/main/factories'

export const makeRemoteLoadAddressByZipCode = (): LoadAddressByZipCode => {
  const viaCepGateway = makeViaCepGateway()
  return new RemoteLoadAddressByZipCode(viaCepGateway)
}
