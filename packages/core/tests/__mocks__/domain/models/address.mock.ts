import { faker } from '@mocks/faker'

import { Address } from '@/domain/models'

export const mockAddress = (): Address => ({
  zipCode: faker.location.zipCode(),
  street: faker.location.street(),
  complement: faker.location.secondaryAddress(),
  neighborhood: faker.lorem.words({ min: 1, max: 3 }),
  city: faker.location.city(),
  state: faker.location.state({ abbreviated: true })
})
