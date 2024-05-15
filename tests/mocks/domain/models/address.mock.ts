import { Address } from '~core/domain/models'
import { faker } from '~mocks/faker'

export const mockAddress = (): Address => ({
  zipCode: faker.location.zipCode(),
  street: faker.location.street(),
  complement: faker.location.secondaryAddress(),
  neighborhood: faker.lorem.words({ min: 1, max: 3 }),
  number: faker.location.buildingNumber(),
  city: faker.location.city(),
  state: faker.location.state({ abbreviated: true })
})
