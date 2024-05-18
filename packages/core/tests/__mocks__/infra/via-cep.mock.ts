import { faker } from '@mocks/faker'

import { ViaCepLoadAddressByZipCodeResult } from '@/infra/gateways'

export const mockViaCepLoadAddressByZipCodeResult = (): ViaCepLoadAddressByZipCodeResult => ({
  cep: faker.location.zipCode(),
  uf: faker.location.state({ abbreviated: true }),
  bairro: faker.lorem.words({ min: 1, max: 3 }),
  localidade: faker.location.city(),
  logradouro: faker.location.streetAddress(),
  complemento: faker.location.secondaryAddress()
})
